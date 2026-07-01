import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

export default function NotificationCard({
  notification
}) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Typography>
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Timestamp}
        </Typography>

        {!notification.read && (
          <Chip
            label="Unread"
            color="error"
          />
        )}
      </CardContent>
    </Card>
  );
}