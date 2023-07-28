import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import BaseCard from "../../baseCard/BaseCard";

const activities = [
  {
    time: "09.50",
    color: "success.main",
    text: "iPhone 12 Pro Max 256GB Pacific Blue",
  },
  {
    time: "09.46",
    color: "secondary.main",
    text: "Samsung Galaxy S21 Ultra 256GB Phantom Black",
  },
  {
    time: "09.47",
    color: "primary.main",
    text: "Oppo Reno 5 Pro 128GB Astral Blue",
  },
  {
    time: "09.48",
    color: "warning.main",
    text: "iPhone 12 Pro Max 256GB Pacific Blue - Pending",
  },
  {
    time: "09.49",
    color: "error.main",
    text: "Payment was canceled",
  },
];

const DailyActivity = () => {
  return (
    <BaseCard title="Selling Activity">
      <Timeline
        sx={{
          p: 0,
        }}
      >
        {activities.map((activity) => (
          <TimelineItem key={activity.time}>
            <TimelineOppositeContent
              sx={{
                fontSize: "12px",
                fontWeight: "700",
                flex: "0",
              }}
            >
              {activity.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                variant="outlined"
                sx={{
                  borderColor: activity.color,
                }}
              />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              color="text.secondary"
              sx={{
                fontSize: "14px",
              }}
            >
              {activity.text}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </BaseCard>
  );
};

export default DailyActivity;
