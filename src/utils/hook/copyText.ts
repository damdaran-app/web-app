export const copyText = async (text: string) => {
  // 1. روش مدرن (اگر در دسترس و مجاز باشد)
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      // اگر fail شد می‌ریم سراغ fallback
    }
  }

  // 2. fallback برای همه حالت‌ها (HTTP، موبایل، WebView)
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // جلوگیری از نمایش روی UI
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length);

    const result = document.execCommand("copy");

    document.body.removeChild(textarea);

    return result;
  } catch (err) {
    return false;
  }
};
