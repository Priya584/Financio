"use client"


import { useNewAccount } from '@/features/accounts/hooks/use-new-account'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { columns, Payment } from './columns'
import { DataTable } from '@/components/ui/table-data'



const data: Payment[]= [{
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
},
{
    id: "728ed52f",
    amount: 90,
    status: "success",
    email: "a@example.com",
},
{
    id: "728ed52f",
    amount: 80,
    status: "failed",
    email: "p@example.com",
}
] 

const AccountsPage = () => {
    const newAccount = useNewAccount();
    return (
        <div className='max-w-screen-xl mx-auto w-full -mt-24 mb-20'>
            <Card className="border-none drop-shadow-lg">
                <CardHeader className="gap-y-2 lg:flex-row lg:justify-between lg:items-center">
                    <CardTitle className="text-xl line-clamp-1">Accounts Page</CardTitle>
                    <Button onClick={newAccount.onOpen} size="sm">
                        <Plus className="mr-2 size-4" />
                        Add New</Button>
                </CardHeader>
                <CardContent>
                    <DataTable onDelete={()=>{}} disabled={false} filterkey='email' columns={columns} data={data}>
                    </DataTable>
                </CardContent>
            </Card>

        </div>
    )
}

export default AccountsPage;