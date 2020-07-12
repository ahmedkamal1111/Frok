import React, { Component } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import {Search,DeleteOutlineTwoTone} from "@material-ui/icons/";


export class ShowNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "News ID",
          field: "newsId",
          filterPlaceholder: "newsId",
          editable: true
        },
        {
          title: "Tranier ID",
          field: "tranierId",
          filterPlaceholder: "userId",
          editable: true
        },
        {
          title: "Tranier Name",
          field: "tranierName",
          filterPlaceholder: "tranierName"
        },
        {
          title: "Title",
          field: "titel",
          filterPlaceholder: "titel",
        },
        {
          title: "Description",
          field: "description",
          filterPlaceholder: "description",
        },
        {
          title: "Active DateFrom",
          field: "activeDateFrom",
        },
        {
          title: "Active DateTo",
          field: "activeDateTo",
        },
        {
          title: "Language",
          field: "language"
        }
      ],
      Allusers: [],
      usr_id: "",
      userspro: [],
      privlages: [],
      profiles: "",
      privileges: "",
      uprofile: "",
      priv: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/news/allnews")
      .then(response => {
        this.setState({ Allusers: response.data.newsData });
        console.log(this.state.Allusers);
      });
      
  }


  render() {
    
    return (
      <main className="content">
        <MaterialTable
          columns={this.state.columns}
          data={this.state.Allusers}
          icons={{ Filter: () => <Search /> }} // <== this solves it
          title="All Users"
          // localization={{
          //   pagination:{
          //     labelDisplayedRows: `${1}-${15} of ${this.props.data.length}`
          //   }
          // }}

          options={{
            pageSize: 15,
            pageSizeOptions: [5, 10, 15, 20],
            paginationType: "stepped",
            // selection: true,

            detailPanelProps: rowData => ({
              disabled: rowData.id !== this.state.selectedRow + 1,
              color: "primary"
            }),
            filtering: true,
            headerStyle: {
              backgroundColor: "#ccc",
              color: "#000",
              paddingLeft: 15
            },
            rowStyle: rowData => ({
              backgroundColor:
                this.state.selected &&
                this.state.selectedRow === rowData.tableData.id
                  ? "#EEE"
                  : "#FFF",
              transition: "background .2s ease-in"
            }),

            actionsColumnIndex: 8
          }}
          actions={[
            {
              //delete partially
              icon: () => <DeleteOutlineTwoTone color={"action"} />,
              tooltip: "Delete this User",
              onClick: (event, rowData) => {
                     axios
                          .post(
                            "https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/news/deleteNews",
                            {newsId: rowData.newsId }
                          )
                          .then(response => {
                            let data = this.state.Allusers;
                            const index = data.indexOf(rowData);
                            data.splice(index, 1);
                            this.setState({ data });
                          });
                         }
            }
          ]}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.Allusers;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    axios.post(
                      "https://cors-anywhere.herokuapp.com/https://api-task1.adminssw.com/news/updateNewsWithOutImage",
                      {
                        newsId:newData.newsId,
                        userId:newData.userId,
                        titel: newData.titel,
                        description: newData.description,
                        activeDateFrom: newData.activeDateFrom,
                        activeDateTo: newData.activeDateTo,
                        updateUserId: newData.usr_id
                      }
                    ).then(response=>{
                      let data = this.state.Allusers;
                      this.setState({ data });
                    })
                    // .then(response => console.log(response))/
                  }
                  resolve();
                }, 1000);
              })
          }}
        />
      </main>
    );
  }
}
export default ShowNews;
