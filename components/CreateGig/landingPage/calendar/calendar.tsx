"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarComp() {
  const [date, setDate] = React.useState<Date[] | undefined>([]);

  return (
    <div className="lg:w-full lg:max-w-xl w-[350px] py-7 h-[500px]">
      <Calendar
        mode="multiple"
        selected={date}
        onSelect={(days) => setDate(days as Date[] | undefined)}
        className="border shadow-lg  w-full rounded-xl h-full  bg-white"
      />
    </div>
  );
}
