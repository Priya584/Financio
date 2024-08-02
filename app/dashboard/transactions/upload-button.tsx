import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useCSVReader } from "react-papaparse";

type Props = {
  onUpload: (data: any) => void;
};

export const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader onUploadAccepted={onUpload}>
      {({ getRootProps }: any) => (

        <div className="relative">
            <Button {...getRootProps()} className="text-[#00eeff] rounded-none uppercase tracking-[1.5px] px-3 py-6 text-base font-bold overflow-hidden transition duration-300  hover:custom-box-shadow">
            <Upload className="mr-2 size-4" />
              Import
            </Button>
            <span className="absolute block top-0 left-0 w-[118.5px] h-[1.8px] bg-gradient-to-r from-transparent to-white animate-button1"></span>
            <span className="absolute block top-[-100%] left-[118.5px] w-[1.8px] h-[56px] bg-gradient-to-b from-transparent to-white animate-button2"></span>
            <span className="absolute block bottom-0 left-0 w-[118.5px] h-[1.8px] bg-gradient-to-l from-transparent to-white animate-button3"></span>
            <span className="absolute block bottom-[-100%] left-[0px] w-[1.8px] h-[56px] bg-gradient-to-t from-transparent to-white animate-button4"></span>
          </div>
      )}
    </CSVReader>
  );
};
