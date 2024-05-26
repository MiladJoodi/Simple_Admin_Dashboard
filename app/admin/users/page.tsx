"use client";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const page = () => {
    
    const rows: GridRowsProp = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', gender: 'Male', age: 35, email: 'jon@example.com', address: 'Winterfell', status: 'Active', numFlights: 10 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', gender: 'Female', age: 42, email: 'cersei@example.com', address: 'King\'s Landing', status: 'Inactive', numFlights: 5 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', gender: 'Male', age: 45, email: 'jaime@example.com', address: 'King\'s Landing', status: 'Active', numFlights: 20 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', gender: 'Female', age: 16, email: 'arya@example.com', address: 'Winterfell', status: 'Active', numFlights: 15 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', gender: 'Female', age: null, email: 'daenerys@example.com', address: 'Dragonstone', status: 'Active', numFlights: 8 },
        { id: 6, lastName: 'Melisandre', firstName: null, gender: 'Female', age: 150, email: 'melisandre@example.com', address: 'Asshai', status: 'Active', numFlights: 12 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', gender: 'Male', age: 44, email: 'ferrara@example.com', address: 'Florence', status: 'Active', numFlights: 18 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', gender: 'Female', age: 36, email: 'rossini@example.com', address: 'Paris', status: 'Active', numFlights: 25 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', gender: 'Male', age: 65, email: 'harvey@example.com', address: 'New York', status: 'Inactive', numFlights: 7 },
      ];
      
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'gender', headerName: 'Gender', width: 110 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'address', headerName: 'Address', width: 200 },
        { field: 'status', headerName: 'Status', width: 110 },
        { field: 'numFlights', headerName: 'Num Flights', type: 'number', width: 130 },
      ];

  return (
    <div className="m-10">
      <h2 className="flex items-center justify-center font-semibold mb-2">
        Users
      </h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default page;
