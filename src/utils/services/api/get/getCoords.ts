"use server";
import axios from "axios";

export const getCoords = async (url: string) => {
  try {
    const response = await axios.get(url, {
      maxRedirects: 10,
    });

    const finalUrl = response.request.res.responseUrl;

    const match = finalUrl.match(
      /@(-?\d+\.\d+),(-?\d+\.\d+)/
    );

    if (!match) {
      return {
        success: false,
        message: "مختصات پیدا نشد",
      };
    }

    return {
      success: true,
      lat: Number(match[1]),
      lng: Number(match[2]),
    };
  } catch (error) {
    return {
      success: false,
      message: "خطا در پردازش لینک",
    };
  }
}