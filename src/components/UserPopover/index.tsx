import { Logout, Settings } from "@mui/icons-material";
import {
  Divider,
  Menu as MuiMenu,
  MenuItem,
  Avatar as MuiAvatar,
  ListItemIcon,
} from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import { Avatar } from "../Avatar";

interface Props {
  open?: boolean;
  onClose?: () => void;
  src?: string;
}

export const UserPopover = ({ onClose = () => {}, src }: Props) => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const router = useRouter();
  const isOpen = Boolean(anchorElement);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElement(null);
    onClose();
  };

  return (
    <>
      <Avatar onClick={handleClick} src={src || ""} />
      <MuiMenu
        open={isOpen}
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClose={handleClose}
        anchorEl={anchorElement}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
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
        <MenuItem>
          <MuiAvatar src={src} />
          Meu Perfil
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={async () => {
            handleClose();
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Configurações
        </MenuItem>

        <MenuItem
          onClick={async () => {
            await router.push("/signout");
            handleClose();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sair
        </MenuItem>
      </MuiMenu>
    </>
  );
};
