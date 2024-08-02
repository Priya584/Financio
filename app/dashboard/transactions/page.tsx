"use client";

import { toast } from "sonner";
import { useState } from "react";

import { useNewTransaction } from "@/features/transactions/hooks/use-new-transaction";
import { useGetTransactions } from "@/features/transactions/api/use-get-transactions";
import { useBulkDeleteTransactions } from "@/features/transactions/api/use-bulk-delete-transactions";
import { useBulkCreateTransactions } from "@/features/transactions/api/use-bulk-create-transactions";

import { useSelectAccount } from "@/features/accounts/hooks/use-select-account";

import { Loader2, Plus } from "lucide-react";

import { transactions as transactionsSchema } from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";

import { columns } from "./columns";
import { UploadButton } from "./upload-button";
import { ImportCard } from "./import-card";

enum VARIANTS {
  LIST = "LIST",
  IMPORT = "IMPORT",
}

const INITIAL_IMPORT_RESULTS = {
  data: [],
  errors: [],
  meta: {},
};

const TransactionsPage = () => {
  const [AccountDialog, confirm] = useSelectAccount();
  const [variant, setVariant] = useState<VARIANTS>(VARIANTS.LIST);
  const [importResults, setImportResults] = useState(INITIAL_IMPORT_RESULTS);

  const onUpload = (results: typeof INITIAL_IMPORT_RESULTS) => {
    console.log({ results });
    setImportResults(results);
    setVariant(VARIANTS.IMPORT);
  };

  const onCancelImport = () => {
    setImportResults(INITIAL_IMPORT_RESULTS);
    setVariant(VARIANTS.LIST);
  };

  const newTransaction = useNewTransaction();
  const createTransactions = useBulkCreateTransactions();
  const deleteTransactions = useBulkDeleteTransactions();
  const transactionsQuery = useGetTransactions();
  const transactions = transactionsQuery.data || [];

  const isDisabled =
    transactionsQuery.isLoading || deleteTransactions.isPending;

  const onSubmitImport = async (
    values: (typeof transactionsSchema.$inferInsert)[],
  ) => {
    const accountId = await confirm();

    if (!accountId) {
      return toast.error("Please select an account to continue.");
    }

    const data = values.map((value) => ({
      ...value,
      accountId: accountId as string,
    }));

    createTransactions.mutate(data, {
      onSuccess: () => {
        onCancelImport();
      },
    });
  };

  if (transactionsQuery.isLoading) {
    return (
      <div className="max-w-screen-2xl mx-auto -mt-24 pb-10 w-full">
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
    );
  }

  if (variant === VARIANTS.IMPORT) {
    return (
      <>
        <AccountDialog />
        <ImportCard
          data={importResults.data}
          onCancel={onCancelImport}
          onSubmit={onSubmitImport}
        />
      </>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto -mt-24 pb-10 w-full">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">
            Transaction History
          </CardTitle>
          <div className="flex flex-col lg:flex-row gap-y-2 items-center gap-x-6">
            <div className="relative">
            <Button onClick={newTransaction.onOpen} className="text-[#00eeff] rounded-none uppercase tracking-[1.5px] px-3 py-6 text-base font-bold overflow-hidden transition duration-300  hover:custom-box-shadow">
              <Plus className="size-4 mr-2" />
              Add New
            </Button>
            <span className="absolute block top-0 left-0 w-[134px] h-[1.8px] bg-gradient-to-r from-transparent to-white animate-button1"></span>
            <span className="absolute block top-[-100%] left-[134px] w-[1.8px] h-[56px] bg-gradient-to-b from-transparent to-white animate-button2"></span>
            <span className="absolute block bottom-0 left-0 w-[134px] h-[1.8px] bg-gradient-to-l from-transparent to-white animate-button3"></span>
            <span className="absolute block bottom-[-100%] left-[0px] w-[1.8px] h-[56px] bg-gradient-to-t from-transparent to-white animate-button4"></span>
          </div>
            <UploadButton onUpload={onUpload} />
          </div>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={transactions}
            filterKey={"payee"}
            onDelete={(row) => {
              const ids = row.map((r) => r.original.id);
              deleteTransactions.mutate({ ids });
            }}
            disabled={isDisabled}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionsPage;
