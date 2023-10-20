import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./ProjectInfo.css";

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorData: "", // CKEditor로부터 받은 데이터를 저장하는 상태
    };
  }

  handleEditorChange = (event, editor) => {
    const data = editor.getData();
    this.setState({ editorData: data });
  };

  render() {
    return (
      <div className="pro_editor">
        <h3 style={{ fontWeight: "600" }}>프로젝트 소개</h3>
        <p>프로젝트 상세페이지 내용을 작성해 주세요.</p>
        <CKEditor
          editor={ClassicEditor}
          config={{
            placeholder: "내용을 입력하세요.",
          }}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
    );
  }
}

export default ProjectInfo;
