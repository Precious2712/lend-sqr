'use client';

import { AlignCenter, CalendarDays, EllipsisVertical, Eye, UserCheck, UserX } from "lucide-react";
import styles from "./filters/filter.module.scss";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { userInfo } from "@/data/applicant/data";
import { UserFour, UserOne, UserThree, UserTwo } from "../svgComp/AllSvgComp";

export function FilterMainComp() {

  const [filteredData, setFilteredData] = useState(userInfo);

  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  })

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

  const resetFilters = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    })
    setFilteredData(userInfo)
  }

  const applyFilters = () => {
    const filtered = userInfo.filter((user) => {
      return (
        (filters.organization === "" || user.organization.toLowerCase().includes(filters.organization.toLowerCase())) &&
        (filters.username === "" || user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
        (filters.email === "" || user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (filters.phoneNumber === "" || user.phoneNumber.includes(filters.phoneNumber)) &&
        (filters.status === "" || user.status.toLowerCase() === filters.status.toLowerCase())
      )
    })
    setFilteredData(filtered)
  }

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div>
      <h1 className={styles.wrapper}>Users</h1>
      <div className={styles.gridLayout}>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <UserOne />
          </div>
          <p className={styles.title}>USERS</p>
          <h2 className={styles.count}>2,453</h2>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapperOne}>
            <UserTwo />
          </div>
          <p className={styles.title}>ACTIVE USERS</p>
          <h2 className={styles.count}>2,453</h2>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapperTwo}>
            <UserThree />
          </div>
          <p className={styles.title}>USERS WITH LOANS</p>
          <h2 className={styles.count}>12,453</h2>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapperThree}>
            <UserFour />
          </div>
          <p className={styles.title}>USERS WITH SAVINGS</p>
          <h2 className={styles.count}>102,453</h2>
        </div>

      </div>

      <main className="mt-8">

        <div className="flex flex-col lg:flex-row gap-0 w-full min-h-screen bg-gray-50">
          <div className="w-full lg:w-[250px] bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-6 shadow-sm">
            <div className="space-y-5">
              <div className="">

                <div className="flex gap-3 pb-4">
                  <div className="flex gap-1.5">
                    <p className="text-[12px] font-bold text-gray-500">ORGANISATION</p>
                    <AlignCenter className="w-4 h-4" />
                  </div>
                  <div className="flex gap-1.5">
                    <p className="text-[12px] font-bold text-gray-500">USERNAME</p>
                    <AlignCenter className="w-4 h-4" />
                  </div>
                </div>

                <Select value={filters.organization} onValueChange={(value) => handleFilterChange("organization", value)}>
                  <SelectTrigger className="w-full h-10 border-gray-300">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Organizations</SelectItem>
                    <SelectItem value="lendsqr">Lendsqr</SelectItem>
                    <SelectItem value="lendstar">Lendstar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <Input
                  placeholder="User"
                  value={filters.username}
                  onChange={(e) => handleFilterChange("username", e.target.value)}
                  className="w-full h-10 border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input
                  placeholder="Email"
                  value={filters.email}
                  onChange={(e) => handleFilterChange("email", e.target.value)}
                  className="w-full h-10 border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <div className="relative">
                  <Input
                    placeholder="Date"
                    value={filters.date}
                    onChange={(e) => handleFilterChange("date", e.target.value)}
                    className="w-full h-10 border-gray-300 pr-10"
                  />
                  <CalendarDays className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <Input
                  placeholder="Phone Number"
                  value={filters.phoneNumber}
                  onChange={(e) => handleFilterChange("phoneNumber", e.target.value)}
                  className="w-full h-10 border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
                  <SelectTrigger className="w-full h-10 border-gray-300">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="blacklisted">Blacklisted</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pt-6">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="flex-1 h-10 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                >
                  Reset
                </Button>
                <Button onClick={applyFilters} className="flex-1 h-10 bg-teal-500 hover:bg-teal-600 text-white">
                  Filter
                </Button>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 bg-white">
            <div className="overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-200">
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
                  {filteredData.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
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

            {filteredData.length === 0 && (
              <div className="text-center py-12 text-gray-500">No users found matching the current filters.</div>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}