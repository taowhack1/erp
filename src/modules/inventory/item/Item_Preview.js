import React, { useState } from "react";
import { Upload, Modal, Space } from "antd";
import { EyeOutlined, PlusOutlined } from "@ant-design/icons";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

const ItemPreview = ({
  imageFile,
  fileList,
  readOnly,
  maxFile,
  setFileList,
  file_type_id,
}) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });
  const handleCancel = () => setState({ ...state, previewVisible: false });
  const handleChange = ({ fileList }) =>
    setFileList(
      fileList.map((file) => {
        let file_temp = file;
        file.status = "done";
        return file_temp;
      })
    );
  const handlePreview = async (file) => {
    console.log(file);
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const { previewVisible, previewImage, previewTitle } = state;
  const uploadConfig = {
    beforeUpload: (file, file_list) => {
      console.log("beforeUpload", file);
      // let files = [];

      // setFileList([...fileList, file]);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e.target);
        file.thumbUrl = e.target.result;
        file.file = e.target.result;
        file.user_name = "2563002";
        file.commit = 1;
        // file.file_type_id = file_type_id;
        // files.push(file);
        setFileList([file]);
      };
      return false;
    },
  };
  console.log("Item_Preview.js", fileList);
  return (
    <>
      {readOnly ? (
        <div className="input-center-disabled">
          <Space>
            <EyeOutlined
              className="button-icon"
              title="View Image"
              onClick={() => handlePreview(fileList)}
            />
            View
          </Space>
        </div>
      ) : (
        <Upload
          {...uploadConfig}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          className="avatar-uploader"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= maxFile ? null : uploadButton}
        </Upload>
      )}
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default React.memo(ItemPreview);
