import React,{Component} from "react";
import "../../../css/fileDownload/fileDownload.css"
import Pagination from "../../../js/components/Pagination";

export default class FileDownload extends Component {
    constructor(){
        super();
        this.state={
            fileList:[{fileName:"这是一个可以下载的文件first",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件0",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件1",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件2",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件3",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件4",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件5",fileTime:"2017-4-11"},
                {fileName:"这是一个可以下载的文件last",fileTime:"2017-4-11"}]
        }
    }
    render(){
        const item = function (item) {
            return (
                <div className="file">
                    <div className="fileName">{item.fileName}</div>
                    <div className="fileTime">{item.fileTime}</div>
                </div>
            )
        };
        return (
            <div id="fileDownload">
                <Pagination list={this.state.fileList} item={item} pageSize="4"/>
            </div>
        )
    }
}
