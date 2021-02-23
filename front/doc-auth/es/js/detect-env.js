/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../front/templates/doc-auth/detect-env.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../front/templates/doc-auth/detect-env.js":
/*!*************************************************!*\
  !*** ../front/templates/doc-auth/detect-env.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
Copyright 2020 Idemia Identity & Security

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
 * Environment detection using webDocserver librarie.
 */
/* global DocserverEnvironment, __ */
/**
 * Check user environment support
 * must be ES5 compatible
 **/
function displayEnvironement (env) {
  const envDetectionPage = document.querySelector('#step-compatibility');
  const descriptionClass = '.description';
  const stepCountrySelectionId = '#step-country-selection';
  if (env.envDetected) {
    const browsersDescription = envDetectionPage.querySelector('.browsers-description ');
    const envOS = env.envDetected.os;
    const envBrowser = env.envDetected.browser;
    if (!envOS.isSupported) {
      document.querySelector(stepCountrySelectionId).className = document.querySelector(stepCountrySelectionId).className.concat('d-none');
      envDetectionPage.className = envDetectionPage.className.replace('d-none', '');
      envDetectionPage.querySelector(descriptionClass).textContent = "Parece que está utilizando un sistema operativo no compatible.";
      browsersDescription.textContent = "Utilice uno de los siguientes sistemas operativos para una mejor experiencia";
      const osList = envDetectionPage.querySelector('.os-list');
      osList.innerHTML = '';
      for (const osIndex in envOS.supportedList) {
        const osInfo = envOS.supportedList[osIndex];
        const os = document.createElement('div');
        os.className = 'os';
        const osImg = document.createElement('div');
        osImg.id = osInfo.toLowerCase().replace(' ', '-');
        osImg.className = 'os-img';
        const osDesc = document.createElement('span');
        osDesc.innerHTML = osInfo;
        os.appendChild(osImg);
        os.appendChild(osDesc);
        osList.appendChild(os);
      }
    } else if (!envBrowser.isSupported) {
      document.querySelector(stepCountrySelectionId).className = document.querySelector(stepCountrySelectionId).className.concat('d-none');
      envDetectionPage.className = envDetectionPage.className.replace('d-none', '');
      envDetectionPage.querySelector(descriptionClass).textContent = "Parece que está utilizando un navegador no compatible.";
      browsersDescription.textContent = "Utilice uno de los siguientes navegadores para una mejor experiencia";
      const browsersList = envDetectionPage.querySelector('.browsers');
      browsersList.innerHTML = '';
      for (const browserIndex in envBrowser.supportedList) {
        const browserInfo = envBrowser.supportedList[browserIndex];
        const browser = document.createElement('div');
        browser.className = 'browser';
        const browserImg = document.createElement('div');
        browserImg.id = browserInfo.name.toLowerCase().replace(' ', '-');
        browserImg.className = 'browser-img';
        const browserDesc = document.createElement('span');
        browserDesc.innerHTML = browserInfo.name + ' Version ' + browserInfo.minimumVersion + '+';
        browser.appendChild(browserImg);
        browser.appendChild(browserDesc);
        browsersList.appendChild(browser);
      }
    } else {
      envDetectionPage.className = envDetectionPage.className.concat(' d-none');
      window.envBrowserOk = true;
      if (!envOS.isMobile) {
        document.querySelector('main').className = document.querySelector('main').className.concat(' pc');
      }
    }
  } else {
    envDetectionPage.querySelector(descriptionClass).textContent = env.message;
  }
}

/**
 * Check user env support
 * must be ES5 compatible
 **/
if (DocserverEnvironment) {
  DocserverEnvironment.detection(true, displayEnvironement);
}


/***/ })

/******/ });
//# sourceMappingURL=detect-env.js.map