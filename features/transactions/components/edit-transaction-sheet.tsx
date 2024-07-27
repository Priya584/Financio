import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { CategoryForm } from "./transaction-form";
import { insertCategorySchema } from "@/db/schema";
import { z } from "zod";
import { useOpenCategory } from "../hooks/use-open-category";
import { useGetCategory } from "../api/use-get-transaction";
import { Loader2 } from "lucide-react";
import { useEditcategories } from "../api/use-edit-transaction";
import { useDeleteCategory } from "../api/use-delete-transaction";
import useConfirm from "@/hooks/use-confirm";

const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

const EditCategorySheet = () => {
  const { isOpen, onClose, id } = useOpenCategory();

  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure you want to delete this category?",
    "You are about to delete this category."
  );

  const CategoryQuery = useGetCategory(id);
  const editMutation = useEditcategories(id);
  const deleteMutation = useDeleteCategory(id);

  const isPending = editMutation.isPending || deleteMutation.isPending;

  const isLoading = CategoryQuery.isLoading;

  const onSubmit = (values: FormValues) => {
    editMutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  const onDelete = async () => {
    const ok = await confirm()

    if(ok) { 
      deleteMutation.mutate(undefined, {
        onSuccess: () => {
          onClose();
        },
      })
    }

  }

  const defaultValues = CategoryQuery.data
    ? {
        name: CategoryQuery.data.name,
      }
    : {
        name: "",
      };

  return (
    <>
      <ConfirmDialog />
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="space-y-4">
          <SheetHeader>
            <SheetTitle>Edit category</SheetTitle>
            <SheetDescription>Edit an existing category.</SheetDescription>
          </SheetHeader>
          {isLoading ? (
            <div
              className="absolute inset-0 flex items-center 
          justify-center"
            >
              <Loader2 className="size-4 text-muted-foreground animate-spin" />
            </div>
          ) : (
            <CategoryForm
              id={id}
              onSubmit={onSubmit}
              disabled={isPending}
              defaultValues={defaultValues}
              onDelete={onDelete}
            />
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default EditCategorySheet;