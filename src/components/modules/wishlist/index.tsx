"use client";
import DeleteConfirmationModal from "@/components/ui/core/SMModal/DeleteConfirmModal";
import { SMTable } from "@/components/ui/core/SMTable";
import { deleteSingleWishlist } from "@/services/wishlist";
import { IProduct } from "@/types";

import { ColumnDef } from "@tanstack/react-table";
import { CircleX, Eye } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const ManageWishlist = ({ products }: { products: IProduct[] }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteSingleWishlist(selectedId);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
          setSelectedId(null);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };
  const columns: ColumnDef<IProduct>[] = [
    {
      accessorKey: "title",
      header: "Product Name",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.images[0]}
            alt={row.original.title}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <span className="truncate">{row.original.title}</span>
        </div>
      ),
    },
    {
      accessorKey: "condition",
      header: "condition",
      cell: ({ row }) => <span>{row.original.condition}</span>,
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => <span>{row.original.category}</span>,
    },
    {
      accessorKey: "brand",
      header: "Brand",
      cell: ({ row }) => <span>{row.original.brand}</span>,
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => <span>${row.original.price.toFixed(2)}</span>,
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => <span>{row.original.status}</span>,
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 cursor-pointer hover:text-green-500"
            title="View"
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 cursor-pointer hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <CircleX className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="space-y-3">
      <h1 className="text-xl font-bold">Manage Wishlist</h1>
      <SMTable columns={columns} data={products || []} />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageWishlist;
