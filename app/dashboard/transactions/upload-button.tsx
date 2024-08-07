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
            <Button {...getRootProps()} className="dark:text-[#0c1ca9] tracking-[1.5px]">
            <Upload className="mr-2 size-4" />
              Import
            </Button>
          </div>
      )}
    </CSVReader>
  );
};
