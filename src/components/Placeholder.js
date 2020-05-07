import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={200}
    viewBox="0 0 400 160"
    backgroundColor="#f2f2f2"
    foregroundColor="#dedede"
  >
    <rect x="0" y="0" rx="3" ry="3" width="67" height="11" />
    <rect x="458" y="13" rx="3" ry="3" width="140" height="11" />
    <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
    <rect x="-5" y="46" rx="3" ry="3" width="100" height="11" />
    <rect x="-2" y="73" rx="3" ry="3" width="339" height="14" />
    <rect x="2" y="22" rx="3" ry="3" width="140" height="11" />
    <rect x="164" y="21" rx="3" ry="3" width="173" height="11" />
    <rect x="2" y="101" rx="0" ry="0" width="338" height="14" />
    <rect x="51" y="130" rx="0" ry="0" width="12" height="0" />
    <rect x="72" y="131" rx="0" ry="0" width="54" height="0" />
    <rect x="145" y="130" rx="0" ry="0" width="3" height="0" />
  </ContentLoader>
);

export default MyLoader;
