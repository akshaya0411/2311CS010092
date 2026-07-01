import {
  useEffect,
  useState
} from "react";

import { getNotifications }
from "../services/notificationService";

import NotificationCard
from "../components/NotificationCard";

import { calculatePriority }
from "../utils/priorityCalculator";

export default function
PriorityNotifications() {

  const [notifications,
  setNotifications] =
  useState([]);

  useEffect(() => {
    loadPriority();
  }, []);

  const loadPriority =
  async () => {

    const data =
      await getNotifications(
        1,
        100
      );

    const sorted =
      data.sort(
        (a, b) =>
          calculatePriority(b) -
          calculatePriority(a)
      );

    setNotifications(
      sorted.slice(0, 10)
    );
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>
        Top Priority
      </h1>

      {notifications.map(
        (n) => (
          <NotificationCard
            key={n.ID}
            notification={n}
          />
        )
      )}
    </div>
  );
}