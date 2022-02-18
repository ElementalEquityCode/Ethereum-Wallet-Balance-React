import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Box, Button, Divider, Drawer, useMediaQuery } from "@mui/material";
import { Cash as CashIcon } from "../../icons/cash";
import { Scrollbar } from "../scrollbar";
import { DashboardSidebarSection } from "./dashboard-sidebar-section";
import { AddAddressModal } from "../widgets/modals/add-address-modal";
import { useTokens } from "../../hooks/use-tokens";

const getSections = (addresses) => {
  let items = [];

  if (addresses) {
    addresses.forEach((address) => {
      items.push({
        title: address.address,
        path: `/${address.address}`,
        icon: <CashIcon fontSize="small" />,
      });
    });
  }

  return [
    {
      title: "Addresses",
      items,
    },
  ];
};

export const DashboardSidebar = (props) => {
  const { onClose, open } = props;
  const tokensContext = useTokens();
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    noSsr: true,
  });
  const sections = getSections(tokensContext.addresses);
  const organizationsRef = useRef(null);
  const [openAddAddressModal, setOpenAddAddressModal] = useState(false);

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  };

  useEffect(handlePathChange, [router.isReady, router.asPath]);

  const handleOpenOrganizationsPopover = () => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = () => {
    setOpenOrganizationsPopover(false);
  };

  const content = (
    <>
      <Scrollbar
        sx={{
          height: "100%",
          "& .simplebar-content": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {sections.map((section) => (
              <DashboardSidebarSection
                key={section.title}
                path={router.asPath}
                sx={{
                  mt: 2,
                  "& + &": {
                    mt: 2,
                  },
                }}
                {...section}
              />
            ))}
          </Box>
          <Divider
            sx={{
              borderColor: "#2D3748",
            }}
          />
          <Box sx={{ p: 2 }}>
            <Button
              color="secondary"
              component="a"
              fullWidth
              sx={{ mt: 2 }}
              variant="contained"
              onClick={() => {
                setOpenAddAddressModal(!openAddAddressModal);
              }}
            >
              Add New Address
            </Button>
          </Box>
        </Box>
        {openAddAddressModal ? (
          <AddAddressModal
            close={() => {
              setOpenAddAddressModal(false);
            }}
          />
        ) : null}
      </Scrollbar>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "neutral.900",
            borderRightColor: "divider",
            borderRightStyle: "solid",
            borderRightWidth: (theme) =>
              theme.palette.mode === "dark" ? 1 : 0,
            color: "#FFFFFF",
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "neutral.900",
          color: "#FFFFFF",
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};
