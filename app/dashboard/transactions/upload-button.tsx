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
            <Button {...getRootProps()} className="dark:text-[#0c1ca9] uppercase tracking-[1.5px] px-3 py-6 text-base font-bold overflow-hidden transition duration-300  hover:custom-box-shadow">
            <Upload className="mr-2 size-4" />
              Import
            </Button>
          </div>
      )}
    </CSVReader>
  );
};
