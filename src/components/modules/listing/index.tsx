"use client";
import { Button } from "@/components/ui/button";
import DeleteConfirmationModal from "@/components/ui/core/SMModal/DeleteConfirmModal";
import { SMTable } from "@/components/ui/core/SMTable";
import { deleteListing, MarkAsSolidListing } from "@/services/listing";
import { IProduct } from "@/types";

import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const ManageListing = ({ products }: { products: IProduct[] }) => {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleMarkAsSold = async (productId: string) => {
    try {
      const result = await MarkAsSolidListing(productId);
      if (result?.success) {
        toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteListing(selectedId);
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
            src={
              row.original.images[0] ||
              "https://psediting.websites.co.in/obaju-turquoise/img/product-placeholder.png"
            }
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
          <Button
            className="text-primary-foreground cursor-pointer"
            title="mark as sold"
            disabled={row.original.status === "sold" ? true : false}
            onClick={() => handleMarkAsSold(row.original._id)}
          >
            Mark Sold
          </Button>
          <button
            className="text-gray-500 cursor-pointer hover:text-green-500"
            title="view"
            onClick={() => router.push(`/product/${row.original._id}`)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 cursor-pointer hover:text-green-500"
            title="Edit"
            onClick={() =>
              router.push(
                `/dashboard/listing/update-listing/${row.original._id}`
              )
            }
          >
            <Edit className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 cursor-pointer hover:text-red-500"
            title="Delete"
            onClick={() => handleDelete(row.original._id)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Products</h1>
        <div className="flex items-center gap-2">
          <Button
            onClick={() => router.push("/dashboard/listing/create-listing")}
            size="sm"
            className="cursor-pointer"
          >
            Add Product <Plus />
          </Button>
        </div>
      </div>
      <SMTable columns={columns} data={products || []} />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageListing;
