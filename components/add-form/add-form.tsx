import { Plus } from "lucide-react";
import { Label } from "../ui/label";

interface AddFormProps {
  handleAdd: () => void
}

const AddForm = ({handleAdd}:AddFormProps) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center rounded-md mt-[20px] h-[120px]">
      <div onClick={handleAdd} className="flex w-[92px] border-b-[6px] border-[#3ccfcf] hover:border-[#ffcd1f] h-[30px] items-center justify-between pt-[20px] pb-[20px] gap-0 text-[20px] text-[#2e3b5b] hover:text-[#ffcd1f] cursor-pointer relative">
        <Plus className="w-3 h-3 font-bold cursor-pointer" />
        <Label className="uppercase font-bold cursor-pointer text-[15px]">
          thêm thẻ
        </Label>
      </div>
    </div>
  );
};

export default AddForm;
