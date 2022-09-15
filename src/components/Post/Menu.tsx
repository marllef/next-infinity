import { Delete, MoreVert, RemoveRedEye, Star } from "@mui/icons-material";
import {
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { MouseEvent, useCallback, useState } from "react";
import { InternalError } from "~/utils/helpers/InternalError";
import { api } from "~/utils/http";
import { showError, showSuccess } from "~/utils/toast";

interface Props {
  isOwner?: boolean;
  postId?: string;
}

export const PostMenu = ({ isOwner = false, postId }: Props) => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchor);
  const session = useSession();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleDeletePost = useCallback(async () => {
    try {
      await api.delete(`/posts/${postId}`);
      showSuccess("Publicação deletada com sucesso!");
      handleClose();
    } catch (err: any) {
      const error = new InternalError(err);
      showError(error.message);
    }
  }, [postId]);

  return (
    <>
      <IconButton className="px-0 py-0" onClick={handleClick}>
        <MoreVert className="text-violet-500" />
      </IconButton>
      <Menu
        open={isOpen}
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClose={handleClose}
        anchorEl={anchor}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 0.5,
            ml: 1,
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        sx={{
          mt: "5px",
          "& .MuiList-root": {
            padding: "4px 0",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {isOwner ? (
          <MenuList dense>
            <MenuItem>
              <ListItemIcon>
                <RemoveRedEye />
              </ListItemIcon>
              Ocultar
            </MenuItem>
            <MenuItem onClick={handleDeletePost}>
              <ListItemIcon>
                <Delete />
              </ListItemIcon>
              Deletar
            </MenuItem>
          </MenuList>
        ) : (
          <MenuList dense>
            <MenuItem>
              <ListItemIcon>
                <Star fontSize="small" />
              </ListItemIcon>
              Marcar
            </MenuItem>
          </MenuList>
        )}
      </Menu>
    </>
  );
};
