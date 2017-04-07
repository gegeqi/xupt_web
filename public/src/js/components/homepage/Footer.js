import React, {Component} from "react";
import "../../../css/homepage/footer.css";


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-link">
                    常用链接
                </div>
                <div className="footer-box">
                    <div className="footer-row">
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                        <div className="footer-item">西安邮电大学:xianyoudian@163.com</div>
                    </div>
                    <div className="footer-row">
                        <div className="footer-item footer-img">
                        </div>

                    </div>

                    <div className="footer-oh">
                        版权所有：西安邮电大学 经济与管理学院 2011-2018 中国西安长安南路563号 陕ICP备040096号
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Footer;