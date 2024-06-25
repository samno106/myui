import Typography from "@mui/material/Typography";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 0,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#FF5733",
          textDecoration: "none",
        }}
      >
        M
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 0,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#A3E045",
          textDecoration: "none",
        }}
      >
        Y
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 0,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#3398FF",
          textDecoration: "none",
        }}
      >
        U
      </Typography>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#FFC300",
          textDecoration: "none",
        }}
      >
        I
      </Typography>
    </div>
  );
};

export default Logo;
