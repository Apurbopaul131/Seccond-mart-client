"use client";
import { SMTable } from "@/components/ui/core/SMTable";
import { ITransaction } from "@/types/transaction";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SoldProduct = ({ trnasactions }: { trnasactions: ITransaction[] }) => {
  const pathname = usePathname();
  const columns: ColumnDef<ITransaction>[] = [
    {
      accessorKey: "itemID.name",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={
              row.original.itemID?.images[0] ||
              "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
            }
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
      accessorKey: "itemID.condition",
      header: "Condition",
      cell: ({ row }) => <span>{row.original.itemID.condition}</span>,
    },
    {
      accessorKey: "itemID.category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.itemID.category}</span>,
    },
    {
      accessorKey: "itemID.brand",
      header: "Brand",
      cell: ({ row }) => <span>{row.original.itemID.brand}</span>,
    },
    {
      accessorKey: "itemID.price",
      header: "Price",
      cell: ({ row }) => <span>${row.original.itemID.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">
        {pathname === "/dashboard/sold-product"
          ? "Sold Product"
          : "Purchase Product"}
      </h1>

      <SMTable columns={columns} data={trnasactions || []} />
    </div>
  );
};

export default SoldProduct;
