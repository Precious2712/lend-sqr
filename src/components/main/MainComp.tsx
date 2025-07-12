'use client';

import { AlignCenter, ChevronDown, ChevronLeft, ChevronRight, EllipsisVertical, Eye, UserCheck, UserX } from "lucide-react";
import { Button } from "../ui/button";
import { data } from "@/data/user/users";
import styles from "./mainStyle/main.module.scss";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { UserFour, UserOne, UserThree, UserTwo } from "../svgComp/AllSvgComp";
export function MainComp() {

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600 bg-green-50 border border-green-200"
      case "inactive":
        return "text-yellow-600 bg-yellow-50 border border-yellow-200"
      case "pending":
        return "text-yellow-600 bg-yellow-50 border border-yellow-200"
      case "blacklisted":
        return "text-red-600 bg-red-50 border border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border border-gray-200"
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.UserH1}>Users</h1>

      <div className={styles.gridContainer}>

        <div className={styles.gridCol}>
          <div className={styles.circleIconOne}>
            <UserOne />
          </div>
          <p className={styles.pTag}>USERS</p>
          <h2 className={styles.hTag}>2,453</h2>
        </div>

        <div className={styles.gridCol}>
          <div className={styles.circleIconTwo}>
            <UserTwo />
          </div>
          <p className={styles.pTag}>ACTIVE USERS</p>
          <h2 className={styles.hTag}>2,453</h2>
        </div>

        <div className={styles.gridCol}>
          <div className={styles.circleIconThree}>
            <UserThree />
          </div>
          <p className={styles.pTag}>USERS WITH LOANS</p>
          <h2 className={styles.hTag}>12,453</h2>
        </div>

        <div className={styles.gridCol}>
          <div className={styles.circleIconFour}>
            <UserFour />
          </div>
          <p className={styles.pTag}>USERS WITH SAVINGS</p>
          <h2 className={styles.hTag}>102,453</h2>
        </div>
      </div>


      <div className={styles.containerItem}>
        <table className={styles.tableWrapper}>
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">ORGANISATION</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">USERNAME</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">EMAIL</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                <div className="flex items-center gap-2">
                  <span className="text-[9px]">PHONE NUMBER</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[180px]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">DATE JOINED</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px]">STATUS</span>
                  <AlignCenter className="w-4 h-4" />
                </div>
              </th>
              <th className="px-6 py-4 w-12"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-[12px] text-gray-900">{user.organization}</td>
                <td className="px-6 py-4 text-[12px] text-gray-900">{user.username}</td>
                <td className="px-6 py-4 text-[12px] text-gray-900">{user.email}</td>
                <td className="px-6 py-4 text-[12px] text-gray-900">{user.phoneNumber}</td>
                <td className="px-6 py-4 text-[12px] text-gray-900">{user.dateJoined}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <EllipsisVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <UserX className="w-4 h-4" />
                        Blacklist User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center gap-2">
                        <UserCheck className="w-4 h-4" />
                        Activate User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.lastPart}>
        <div className={styles.comps}>
          <p className={styles.showing}>showing</p>
          <Button variant='ghost' className={styles.buttonTag}>
            <p className={styles.figure}>100</p>
            <ChevronDown />
          </Button>
          <p className={styles.showing}>out of 100</p>
        </div>

        <div className={styles.box}>
          <Button className={styles.svg}>
            <ChevronLeft className={styles.icon} />
          </Button>
          <p className={styles.numbers}>1</p>
          <p className={styles.numbers}>2</p>
          <p className={styles.numbers}>3</p>
          <span>...</span>
          <p className={styles.digit}>15</p>
          <p className={styles.digit}>16</p>
          <Button className={styles.svg}>
            <ChevronRight className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
}