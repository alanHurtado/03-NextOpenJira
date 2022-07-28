import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";
import { Entry } from "../../interface";
import { UIContext } from "../../context/ui/UIContext";
import { useRouter } from "next/router";
interface Props {
  entry: Entry;
}
export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging } = useContext(UIContext);
  const router = useRouter();
  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging(true);
  };

  const onDragEnd = () => {
    startDragging(false);
  };
  const onClick = () => {
    router.push(`/entries/${entry._id}`);
  };
  return (
    <Card
      sx={{ marginBotton: 1 }}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onClick={onClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            backgroundColor: "transparent",
            p: 1,
          }}
        >
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
