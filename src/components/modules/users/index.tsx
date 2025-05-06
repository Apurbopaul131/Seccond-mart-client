"use client";
import DeleteConfirmationModal from "@/components/ui/core/SMModal/DeleteConfirmModal";
import { SMTable } from "@/components/ui/core/SMTable";
import { useUser } from "@/context/UserContext";
import { blockUser } from "@/services/users";
import { IUser } from "@/types";

import { ColumnDef } from "@tanstack/react-table";
import { Eye, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import SearchBar from "../products/SearchBar";

const ManageUsers = ({ users }: { users: IUser[] }) => {
  //   const router = useRouter();
  const currentUser = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  //Handle delation of the product
  const handleDelete = (id: string) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await blockUser(selectedId);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
          setSelectedId(null);
          currentUser.setIsLoading(true);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };
  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => <span>{row.original.name}</span>,
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "phoneNumber",
      header: "Phone Number",
      cell: ({ row }) => <span>{row.original.phoneNumber}</span>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <span>{row.original.role}</span>,
    },
    {
      accessorKey: "isBlocked",
      header: "isBlocked",
      cell: ({ row }) => {
        console.log(row.original.isBlocked);
        return (
          <span>
            {row.original.isBlocked === false ? "unblocked" : "Blocked"}
          </span>
        );
      },
    },
    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <button
            className="text-gray-500 cursor-pointer hover:text-green-500"
            title="view"
            // onClick={() => router.push(`/product/${row.original.userId}`)}
          >
            <Eye className="w-5 h-5" />
          </button>

          <button
            className="text-gray-500 cursor-pointer hover:text-red-500 disabled:cursor-not-allowed disabled:text-gray-300"
            title="Delete"
            disabled={row.original.isBlocked}
            onClick={() => handleDelete(row.original.userId)}
          >
            <Trash className="w-5 h-5" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="space-y-3">
      <SearchBar />
      <SMTable columns={columns} data={users || []} />
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageUsers;
