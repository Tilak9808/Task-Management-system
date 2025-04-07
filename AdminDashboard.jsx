import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Task Management */}
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Create Task</h2>
            <Button className="w-full">Go to Task Creator</Button>
          </CardContent>
        </Card>

        {/* Employee Management */}
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Create Employee</h2>
            <Button className="w-full">Go to Employee Creator</Button>
          </CardContent>
        </Card>

        {/* Alerts & Notices */}
        <Card className="shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Send Alert / Notice</h2>
            <Button className="w-full">Send Notification</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
