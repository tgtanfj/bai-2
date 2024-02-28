"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle } from "lucide-react";
import { Plus } from "lucide-react";
import { Lock } from "lucide-react";
import { NotepadText } from "lucide-react";
import { Settings } from "lucide-react";
import { ArrowLeftRight } from "lucide-react";
import { Keyboard } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FormInput from "@/components/form/form-input";
import { useEffect, useState } from "react";
import AddForm from "@/components/add-form/add-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { XCircle } from "lucide-react";

export default function Home() {
  const [n, setN] = useState(3);
  const [formInputArray, setFormInputArray] = useState<any[]>([]);
  // let formInputArray: any = [];

  useEffect(() => {
    const initialFormInputs = [];
    for (let i = 1; i <= 2; i++) {
      initialFormInputs.push(
        <FormInput n={n} label={i} key={i} handleDelete={handleDelete} />
      );
    }
    setFormInputArray(initialFormInputs);
  }, []);

  const handleAdd = () => {
    const newFormInput = (
      <FormInput n={n} label={n} key={n} handleDelete={handleDelete} />
    );
    setFormInputArray([...formInputArray, newFormInput]);
    setN(n + 1);
  };

  const handleDelete = (label: number) => {
    const updatedArray = formInputArray.filter((item: any) => {
      const parsedNumber = parseInt(item.key);
      return parsedNumber !== label;
    });
    setFormInputArray(updatedArray);
    setN(n - 1);
  };

  // for (let i = 1; i < n; i++) {
  //   formInputArray.push(
  //     <FormInput handleDelete={handleDelete} n={n} label={i} key={i} />
  //   );
  // }

  return (
    <div className="h-auto w-full bg-[#f6f7fb] pt-[60px] pb-[50px]">
      <div className="mx-[160px] ">
        <div className="flex items-center justify-between mb-[80px]">
          <Label className="text-[20px] font-[600]">Tạo học phần mới</Label>
          <Button className="text-white cursor-default" variant="secondary">
            Tạo
          </Button>
        </div>
        <Input
          className="h-[50px]"
          placeholder="Nhập tiêu đề, ví dụ:  Sinh Học - Chương 22: Tiến hóa"
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 md:gap-10 lg:gap-10 mt-[24px]">
          <Textarea
            className="resize-none"
            placeholder="Thêm mô tả..."
            rows={5}
          />
          <div className="flex flex-col justify-between relative">
            <Input className="h-[50px]" placeholder="Tên trường" />
            <AlertCircle className="absolute top-[85px] right-[20px] w-5 h-5 text-[#586380]" />
            <Input className="h-[50px]" placeholder="Khóa học" disabled />
            <AlertCircle className="absolute top-[15px] right-[20px] w-5 h-5 text-[#586380]" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-[50px] mb-[60px]">
          <div className="flex items-center justi gap-5">
            <Button variant="outline" className="text-[#65728f]">
              <Plus className="w-4 h-4 mr-2 " /> Nhập
            </Button>
            <Button variant="outline">
              <Plus className="w-4 h-4 mr-2 text-[#65728f]" />{" "}
              <p className="text-[#65728f]">Thêm sơ đồ</p>{" "}
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
            </Button>
            <Button className="text-[#65728f]" variant="outline">
              <NotepadText className="w-4 h-4 mr-2" /> Tạo từ ghi chú
            </Button>
          </div>
          <div className="flex items-center justi gap-5">
            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <AlertDialog>
                  <AlertDialogTrigger>
                    <TooltipTrigger asChild>
                      <div className="text-[#65728f] cursor-pointer hover:bg-[#dddcdc] w-[40px] h-[40px] rounded-full bg-white border border-input flex items-center justify-center">
                        <Settings />
                      </div>
                    </TooltipTrigger>
                  </AlertDialogTrigger>
                  <AlertDialogContent className=" ">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="h-[105px] w-full bg-[#4255ff] ">
                        <div className="w-auto h-full flex items-center justify-between mx-[30px]">
                          <div className="text-white text-[30px]">Tùy chọn</div>
                          <AlertDialogCancel className="bg-transparent outline-none border-none hover:bg-transparent ">
                            <XCircle className="w-8 h-8 text-white" />
                          </AlertDialogCancel>
                        </div>
                      </AlertDialogTitle>
                      <AlertDialogDescription className="w-full">
                        <div className="w-[100%] flex flex-col items-center justify-center mx-[30px] my-[35px]">
                          <div className="w-full flex items-center justify-center">
                            <div className="w-[50%] flex flex-col items-start justify-start gap-[10px]">
                              <p className="uppercase text-[#38415e] text-[12px] font-[600]">hiển thị với</p>
                              <select
                                className="w-[185px] h-[40px] text-[#43d0d0] border-2 rounded-sm px-[10px]"
                                name=""
                                id=""
                              >
                                <option>Mọi người</option>
                                <option>Chỉ tôi</option>
                              </select>
                              <p className="text-[#979fb7] font-[600] w-[80%]">Mọi người dùng Quizlet có thể sử dụng học phần này</p>
                            </div>
                            <div className="w-[50%] flex flex-col items-start justify-start gap-[10px]">
                              <p className="uppercase text-[#38415e] text-[12px] font-[600]">AI CÓ THỂ SỬA</p>
                              <select
                                className="w-[185px] h-[40px] text-[#43d0d0] border-2 rounded-sm px-[10px]"
                                name=""
                                id=""
                              >
                                <option>Chỉ tôi</option>
                                <option>Mọi người</option>
                              </select>
                              <p className="text-[#979fb7] font-[600] w-[80%]">Chỉ có bạn mới chỉnh sửa được học phần này</p>
                            </div>
                          </div>
                          <div className="flex items-center justify-center w-[100%] mt-[30px] mb-[30px]">
                            <Button className="w-[80%] h-[70px] mr-[60px] bg-[#3ccfcf] text-white hover:bg-[#3ccfcf] text-[20px] font-[600]">Lưu</Button>
                          </div>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
                <TooltipContent
                  side="bottom"
                  align="end"
                  className="bg-black text-white"
                >
                  <p>Quản lý quyền truy cập</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                  <div className="text-[#65728f] cursor-pointer hover:bg-[#dddcdc] w-[40px] h-[40px] rounded-full bg-white border border-input flex items-center justify-center">
                    <ArrowLeftRight />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="end"
                  className="bg-black text-white"
                >
                  <p>Lật lại thuật ngữ và định nghĩa</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                  <div className="text-[#65728f] cursor-pointer hover:bg-[#dddcdc] w-[40px] h-[40px] rounded-full bg-white border border-input flex items-center justify-center">
                    <Keyboard />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="end"
                  className="bg-black text-white"
                >
                  <p>Phím tắt bàn phím</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        {/* <div>{formInputArray}</div> */}
        {formInputArray.map((formInput) => formInput)}
        <AddForm handleAdd={handleAdd} />
        <div className="flex items-center justify-end mt-[20px]">
          <Button className="text-white text-[16px] w-[125px] h-[60px] bg-[#4255ff] hover:bg-[#4255ffe8]">
            Tạo
          </Button>
        </div>
      </div>
    </div>
  );
}
