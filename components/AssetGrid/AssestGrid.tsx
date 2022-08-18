import React, { useEffect, useState } from "react";
import SingleAsset, { Asa } from "../SingleAsset/SingleAsset";
import styles from "../../styles/AssetGrid.module.css";

import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../../GraphQL/Queries";

const AssestGrid = ({}) => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    let mount = true;
    const getData = async () => {
      try {
        if (data) {
          const allAssets = data.asalist.result;
          setAssets(allAssets && (data.asalist.result as Asa));
        }
      } catch (error) {
        return error;
      }
    };

    getData();

    return () => {
      mount = false;
    };
  }, [data]);

  if (loading)
    return (
      <div className={styles.loadingWrapper}>
        <div className={styles.loadbar}>
          <p className={styles.loading}>Loading...</p>
        </div>
      </div>
    );

  return (
    <div className={styles.assetGridWrapper}>
      <SingleAsset data={assets} />
    </div>
  );
};

export default AssestGrid;
