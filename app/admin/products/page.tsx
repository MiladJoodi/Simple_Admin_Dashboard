"use client";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const page = () => {
    return (
        <div className="m-10">
      <h2 className="flex items-center justify-center font-semibold mb-2">
        Products
      </h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
    );
}

export default page;