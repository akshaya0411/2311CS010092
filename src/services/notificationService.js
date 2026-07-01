import axios from "axios";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

export const getNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  const response = await axios.get(API, {
    params: {
      page,
      limit,
      notification_type: type
    }
  });

  return response.data.notifications;
};