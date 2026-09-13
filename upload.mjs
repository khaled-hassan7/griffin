import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";
import os from "os";

// 1. قراءة المتغيرات من .env.local وإنشاء Supabase Client خاص بالسكريبت
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ لم يتم العثور على مفاتيح Supabase في ملف .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const DESKTOP_PATH = path.join(os.homedir(), "Desktop", "griffinPhoto");

function slugToName(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function processAllProducts() {
  if (!fs.existsSync(DESKTOP_PATH)) {
    console.error(`❌ مجلد griffinPhoto غير موجود: ${DESKTOP_PATH}`);
    return;
  }

  const folders = fs
    .readdirSync(DESKTOP_PATH, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  for (const slug of folders) {
    const folderPath = path.join(DESKTOP_PATH, slug);
    const jsonPath = path.join(folderPath, "data.json");

    console.log(`\n🚀 جاري معالجة المنتج: [ ${slug} ]...`);

    // توليد اسم افتراضي من الـ slug
    const generatedName = slugToName(slug);

    // قراءة البيانات الإضافية من data.json لو موجود
    let productDetails = {};
    if (fs.existsSync(jsonPath)) {
      const rawData = fs.readFileSync(jsonPath, "utf-8");
      productDetails = JSON.parse(rawData);
    }

    // رفع جميع الصور من الفولدر
    const files = fs
      .readdirSync(folderPath)
      .filter((f) => !f.startsWith(".") && f !== "data.json");
    const imageUrls = [];

    for (const fileName of files) {
      const filePath = path.join(folderPath, fileName);
      const fileBuffer = fs.readFileSync(filePath);
      const storagePath = `${slug}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("products")
        .upload(storagePath, fileBuffer, { upsert: true });

      if (uploadError) {
        console.error(
          `  ❌ خطأ في رفع الصورة ${fileName}:`,
          uploadError.message,
        );
        continue;
      }

      const { data } = supabase.storage
        .from("products")
        .getPublicUrl(storagePath);
      imageUrls.push(data.publicUrl);
    }

    // تجهيز الـ Payload الكامل
    const productPayload = {
      slug: slug,
      name: productDetails.name || generatedName,
      images: imageUrls,
      ...productDetails,
    };

    // حفظ/تحديث البيانات في جدول products (UPSERT)
    const { error: dbError } = await supabase
      .from("products")
      .upsert(productPayload, { onConflict: "slug" });

    if (dbError) {
      console.error(`  ❌ خطأ في تحديث الداتا بيز:`, dbError.message);
    } else {
      console.log(
        `  ✅ تم حفظ المنتج وصوره بنجاح! الاسم: "${productPayload.name}"`,
      );
    }
  }
}

processAllProducts();