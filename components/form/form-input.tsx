"use client";

import React, { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Equal, Lock } from "lucide-react";
import { Trash } from "lucide-react";
import { Image } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ListPlus } from "lucide-react";
import { SpellCheck } from "lucide-react";
import { Mic } from "lucide-react";
import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

interface FormInputProps {
  label: number;
  n: number;
  handleDelete: (label: number) => void;
}

const FormInput = ({ label, n, handleDelete }: FormInputProps) => {
  const [isDivVisible, setDivVisible] = useState(false);
  const [isUploadImage, setIsUploadImage] = useState(false);

  const onDelete = () => {
    handleDelete(label);
  };

  const handleFocus = () => {
    setDivVisible(true);
  };

  const handleBlur = () => {
    setDivVisible(false);
  };

  const handleUploadImage = () => {
    setIsUploadImage(!isUploadImage);
  };

  return (
    <>
      <div className="w-full bg-white flex flex-col justify-center items-center rounded-md mt-[20px]">
        <div className="h-[60px] w-full border-b-2 border-[#f6f7fb] px-[20px] flex items-center justify-between relative">
          <Label className="text-[#ada2b4] text-[18px]">{label}</Label>
          <div className="flex items-center justify-center gap-5">
            <Equal className="text-[#d9dde8] hover:text-[#414a65] w-6 h-6" />
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                  {n <= 2 ? (
                    <Trash className="text-[#e9ebf1] w-4 h-4 cursor-default" />
                  ) : (
                    <Trash
                      onClick={onDelete}
                      className="text-[#414a65] w-4 h-4 cursor-pointer"
                    />
                  )}
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="center"
                  sideOffset={10}
                  className="bg-[#4255ff] text-white "
                >
                  <p>Xóa thẻ này</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          {isDivVisible && (
            <div className="absolute top-[15px] right-[525px] flex items-center justify-center gap-5">
              <div className="w-[180px] h-[30px] rounded-3xl bg-[#fff9e3] flex items-center justify-center gap-5">
                <div className="flex items-center justify-center w-[20px] h-[20px] rounded-sm bg-transparent hover:bg-[#e4e3e3] cursor-pointer">
                  <SpellCheck className="w-3 h-3" />
                </div>
                <div className="w-[20px] h-[20px] rounded-full cursor-pointer bg-gradient-to-b from-[#ffcd1f] via-[#b9a3f8] to-[#5ca1f0] cursor-pointer" />
                <TooltipProvider>
                  <Tooltip delayDuration={50}>
                    <TooltipTrigger asChild>
                      <Mic className="w-4 h-4 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                      sideOffset={10}
                      className="bg-[#4255ff] text-white "
                    >
                      <p>Thêm bảng ghi âm</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip delayDuration={50}>
                    <TooltipTrigger asChild>
                      <div className="w-8 h-5 bg-[#ffcd1f] flex items-center justify-center rounded-2xl ml-2">
                        <Lock className="w-4 h-4 text-center text-black" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                      sideOffset={10}
                      className="bg-black text-white "
                    >
                      <p>Mở khóa tính năng này với Quizlet Plus</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div>
                <TooltipProvider>
                  <Tooltip delayDuration={50}>
                    <TooltipTrigger asChild>
                      <ListPlus className="w-4 h-4 cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                      sideOffset={10}
                      className="bg-[#4255ff] text-white "
                    >
                      <p>Tắt gợi ý</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          )}
        </div>
        <div className="h-[120px] w-full flex items-center justify-center gap-10">
          <div className="w-[50%] flex flex-col items-start justify-center ml-[20px]">
            <input
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-full outline-none h-[50px] border-b-[3px] border-[#2e3856] focus:border-[#ffcd1f] focus:border-b-[5px] pt-[20px]"
            ></input>
            <div className="flex items-center justify-between w-full">
              <Label className="text-[#a7a0b5] uppercase text-[12px] mt-[10px]">
                Thuật ngữ
              </Label>
              {isDivVisible && (
                <Label className="text-[#40d2dd] uppercase text-[12px] mt-[10px]">
                  Chọn ngôn ngữ
                </Label>
              )}
            </div>
          </div>
          <div className=" w-[50%] flex items-start justify-center mr-[20px] gap-5">
            <div className="w-[80%]">
              <input
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full outline-none h-[50px] border-b-[3px] border-[#2e3856] focus:border-[#ffcd1f] focus:border-b-[5px] pt-[20px]"
              ></input>
              <div className="flex items-center justify-between w-full">
                <Label className="text-[#a7a0b5] uppercase text-[12px] mt-[10px]">
                  Định nghĩa
                </Label>
                {isDivVisible && (
                <Label className="text-[#40d2dd] uppercase text-[12px] mt-[10px]">
                  Chọn ngôn ngữ
                </Label>
              )}
              </div>
            </div>
            <div className="w-[20%] flex items-center justify-center cursor-pointer">
              <div
                onClick={handleUploadImage}
                className="group w-[80px] h-[60px] rounded-sm border-dashed-[2px] outline-dashed outline-2 outline-offset-2 outline-[#e4e7ee] flex flex-col items-center justify-center"
              >
                <Image className="w-5 h-5 group-hover:text-[#ffcd1f]" />
                <Label className="uppercase text-[10px] mt-[5px]">
                  Hình ảnh
                </Label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isUploadImage && (
        <div className="h-[200px] w-full flex items-start justify-start bg-white mt-[2px] pl-[20px] relative">
          <input
            placeholder="Tìm hình ảnh của Quizlet"
            className="w-[300px] outline-none h-[40px] border-b-[3px] border-[#2e3856] focus:border-[#ffcd1f] focus:border-b-[5px] mt-[20px]"
          />
          <MoveRight className="text-[#dbdee9] w-[20px] h-[20px] absolute top-[25px] left-[290px]" />
          <Button className="h-[45px] w-[330px] mt-[16px] ml-[30px] text-white bg-[#3ccfcf] hover:bg-[#3ccfcf] cursor-pointer">
            Hoặc tải lên hình ảnh của riêng bạn{" "}
            <div className="w-8 h-5 bg-[#ffcd1f] flex items-center justify-center rounded-2xl ml-2">
              <Lock className="w-4 h-4 text-center text-black" />
            </div>
          </Button>
        </div>
      )}
    </>
  );
};

export default FormInput;
