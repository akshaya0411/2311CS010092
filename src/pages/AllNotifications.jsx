import { useEffect, useState } from "react";
import { getNotifications }
from "../services/notificationService";

import NotificationCard
from "../components/NotificationCard";

import FilterBar
from "../components/FilterBar";

import PaginationBar
from "../components/PaginationBar";

export default function AllNotifications() {
  const [notifications,
    setNotifications] = useState([]);

  const [page, setPage] =
    useState(1);

  const [filter, setFilter] =
    useState("");

  useEffect(() => {
    loadData();
  }, [page, filter]);

  const loadData = async () => {
    const data =
      await getNotifications(
        page,
        10,
        filter
      );

    setNotifications(data);
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>
        All Notifications
      </h1>

      <FilterBar
        value={filter}
        onChange={setFilter}
      />

      {notifications.map((n) => (
        <NotificationCard
          key={n.ID}
          notification={n}
        />
      ))}

      <PaginationBar
        page={page}
        setPage={setPage}
      />
    </div>
  );
}