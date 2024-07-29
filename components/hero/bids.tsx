import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface Ibids {
  bidId: string;
  userId: string;
  amount: number;
  message: string;
  createdAt: string;
}
const Bids: React.FC<Ibids> = ({ bidId, userId, message, createdAt }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{userId}</CardTitle>
        <CardDescription>{message}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{createdAt}</p>
      </CardContent>
    </Card>
  );
};

export default Bids;
