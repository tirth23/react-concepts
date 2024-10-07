import React, { memo } from "react";
const ListRenderingText = memo((props) => {
	const { children } = props;
  // if key not used all children will be re-rendered
	console.log(children);
	return <div>{children}</div>;
});
export default ListRenderingText;
