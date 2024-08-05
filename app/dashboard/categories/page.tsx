"use client";

import { Loader2, Plus } from "lucide-react";

import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useGetCategories } from "@/features/categories/api/use-get-categories";
import { useBulkDeleteCategories } from "@/features/categories/api/use-bulk-delete-categories";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { columns } from "./colomns";
import { Skeleton } from "@/components/ui/skeleton";

const AccoutnsPage = () => {
  const useCategory = useNewCategory();
  const deleteCategories = useBulkDeleteCategories();
  const categoriesQuery = useGetCategories();
  const categories = categoriesQuery.data || [];

  const isDisabled = categoriesQuery.isLoading || deleteCategories.isPending;

  if (categoriesQuery.isLoading) {
    return (
      <div>
        <div className="max-screen-2xl mx-auto w-full pb-10 -mt-24">
          <Card className="border-none drop-shadow-sm">
            <CardHeader>
              <Skeleton className="h-8 w-48" />
            </CardHeader>
            <CardContent>
              <div className="h-[500px] w-full flex items-center justify-center">
                <Loader2 className="size-6 text-slate-300 animate-spin" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="max-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none shadow1">
      <CardHeader className="gap-y-2 items-center md:flex-row md:items-center md:justify-between md:mb-0 mb-5">
          <CardTitle className="text-xl line-clamp-1">Category page</CardTitle>
          
          <div className="mt-11 relative">
            <Button onClick={useCategory.onOpen} className="dark:text-[#0c1ca9] uppercase tracking-[1.5px] px-3 py-6 text-base font-bold overflow-hidden transition duration-300  hover:custom-box-shadow">
              <Plus className="size-4 mr-2" />
              Add New
            </Button>
          </div>

        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={categories}
            filterKey="name"
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteCategories.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccoutnsPage;
