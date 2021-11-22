import React from 'react';
import ReactDOM from 'react-dom';
import '../../tables.css'
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import MUIDataTable from 'mui-datatables';

const theme = createMuiTheme({
  overrides: {
    MuiTable: {
      root: {
        border: [[1, 'solid', '#d3d3d3']],
      },
    },
    MuiTableCell: {
      root: {
        borderColor: '#d3d3d3',
      },
      head: {
        color: '#474748',
        fontSize: '18px',
        background: '#fec107',
        '&:not(:last-child)': {
          borderRight: [[1, 'solid', '#c0c0c0']],
        },
      },
    },
    MuiTableSortLabel: {
      root: {
        alignItems: 'flex-start',
      },
    },
    MuiTableFooter: {
      root: {
        background: 'white',
        
        
      },
    },

    // MUIDataTable
    MUIDataTableHeadCell: {
      sortLabelRoot: {
        // height: undefined,
      },
    },
  },
});

const columns = [
  { name: 'id', label: 'S.No' },
  { name: 'project_name', label: 'Project Name' },
  { name: 'project_source_id', label: 'Project Source ID' },
  {
    name: 'analysis_type',
    label: 'Analysis Type',
    
  },
  { name: 'status', label: 'Status' },
];

const data = [
  
  {
    id: '1',
    project_name: 'INDTNA12345_re1',
    project_source_id: 'INDTNA12345',
    analysis_type: 'TO pipeline',
    status: 'Completed'
  },
  
];

function Tables() {
  return (
    <ThemeProvider theme={theme}>
      <MUIDataTable
        columns={columns}
        data={data}
        options={{
          responsive: '',
          fixedHeader: false,
          filterType: 'textField',
          selectableRows: 'none',
          elevation: 0,
          print: false,
        }}
      />
    </ThemeProvider>
  );
}

export default Tables