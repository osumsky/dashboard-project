import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { dashym, logo } from "assets/images";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Dashym" width="28px" />
        ) : (
          <img src={dashym} alt="Dashym" width="100px"  />
        )}
      </Link>
    </Button>
  );
};
