"use client";
import { SMTable } from "@/components/ui/core/SMTable";
import { ITransaction } from "@/types/transaction";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

const PurchaseHistory = ({
  trnasactions,
}: {
  trnasactions: ITransaction[];
}) => {
  const columns: ColumnDef<ITransaction>[] = [
    {
      accessorKey: "itemID.name",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.itemID.images[0]}
            alt={row.original.buyerID.name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.itemID.title}</span>
        </div>
      ),
    },
    {
      accessorKey: "buyerID.name",
      header: "Buyer Name",
      cell: ({ row }) => <span>{row.original.buyerID.name}</span>,
    },
    {
      accessorKey: "sellerID.name",
      header: "Seller Name",
      cell: ({ row }) => <span>{row.original.sellerID.name}</span>,
    },
    {
      accessorKey: "itemID.price",
      header: "Price",
      cell: ({ row }) => <span>${row.original.itemID.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "createdAt",
      header: "Time",
      cell: ({ row }) => <span>{row.original.createdAt.split("T")[0]}</span>,
    },
    {
      accessorKey: "transaction.id",
      header: "TrnxID",
      cell: ({ row }) => <span>{row.original.transaction.id}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
  ];
  return (
    <div className="space-y-3">
      <SMTable columns={columns} data={trnasactions || []} />
    </div>
  );
};

export default PurchaseHistory;
