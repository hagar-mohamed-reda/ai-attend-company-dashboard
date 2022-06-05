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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/form-imagecrop.init.js":
/*!***************************************************!*\
  !*** ./resources/js/pages/form-imagecrop.init.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\nTemplate Name: Ubold - Responsive Bootstrap 4 Admin Dashboard\nAuthor: CoderThemes\nWebsite: https://coderthemes.com/\nContact: support@coderthemes.com\nFile: Image crop init js\n*/\n$(function () {\n  'use strict';\n\n  var console = window.console || {\n    log: function log() {}\n  };\n  var URL = window.URL || window.webkitURL;\n  var $image = $('#image');\n  var $download = $('#download');\n  var $dataX = $('#dataX');\n  var $dataY = $('#dataY');\n  var $dataHeight = $('#dataHeight');\n  var $dataWidth = $('#dataWidth');\n  var $dataRotate = $('#dataRotate');\n  var $dataScaleX = $('#dataScaleX');\n  var $dataScaleY = $('#dataScaleY');\n  var options = {\n    aspectRatio: 16 / 9,\n    preview: '.img-preview',\n    crop: function crop(e) {\n      $dataX.val(Math.round(e.detail.x));\n      $dataY.val(Math.round(e.detail.y));\n      $dataHeight.val(Math.round(e.detail.height));\n      $dataWidth.val(Math.round(e.detail.width));\n      $dataRotate.val(e.detail.rotate);\n      $dataScaleX.val(e.detail.scaleX);\n      $dataScaleY.val(e.detail.scaleY);\n    }\n  };\n  var originalImageURL = $image.attr('src');\n  var uploadedImageName = 'cropped.jpg';\n  var uploadedImageType = 'image/jpeg';\n  var uploadedImageURL; // Tooltip\n\n  $('[data-toggle=\"tooltip\"]').tooltip(); // Cropper\n\n  $image.on({\n    ready: function ready(e) {\n      console.log(e.type);\n    },\n    cropstart: function cropstart(e) {\n      console.log(e.type, e.detail.action);\n    },\n    cropmove: function cropmove(e) {\n      console.log(e.type, e.detail.action);\n    },\n    cropend: function cropend(e) {\n      console.log(e.type, e.detail.action);\n    },\n    crop: function crop(e) {\n      console.log(e.type);\n    },\n    zoom: function zoom(e) {\n      console.log(e.type, e.detail.ratio);\n    }\n  }).cropper(options); // Buttons\n\n  if (!$.isFunction(document.createElement('canvas').getContext)) {\n    $('button[data-method=\"getCroppedCanvas\"]').prop('disabled', true);\n  }\n\n  if (typeof document.createElement('cropper').style.transition === 'undefined') {\n    $('button[data-method=\"rotate\"]').prop('disabled', true);\n    $('button[data-method=\"scale\"]').prop('disabled', true);\n  } // Download\n\n\n  if (typeof $download[0].download === 'undefined') {\n    $download.addClass('disabled');\n  } // Options\n\n\n  $('.docs-toggles').on('change', 'input', function () {\n    var $this = $(this);\n    var name = $this.attr('name');\n    var type = $this.prop('type');\n    var cropBoxData;\n    var canvasData;\n\n    if (!$image.data('cropper')) {\n      return;\n    }\n\n    if (type === 'checkbox') {\n      options[name] = $this.prop('checked');\n      cropBoxData = $image.cropper('getCropBoxData');\n      canvasData = $image.cropper('getCanvasData');\n\n      options.ready = function () {\n        $image.cropper('setCropBoxData', cropBoxData);\n        $image.cropper('setCanvasData', canvasData);\n      };\n    } else if (type === 'radio') {\n      options[name] = $this.val();\n    }\n\n    $image.cropper('destroy').cropper(options);\n  }); // Methods\n\n  $('.docs-buttons').on('click', '[data-method]', function () {\n    var $this = $(this);\n    var data = $this.data();\n    var cropper = $image.data('cropper');\n    var cropped;\n    var $target;\n    var result;\n\n    if ($this.prop('disabled') || $this.hasClass('disabled')) {\n      return;\n    }\n\n    if (cropper && data.method) {\n      data = $.extend({}, data); // Clone a new one\n\n      if (typeof data.target !== 'undefined') {\n        $target = $(data.target);\n\n        if (typeof data.option === 'undefined') {\n          try {\n            data.option = JSON.parse($target.val());\n          } catch (e) {\n            console.log(e.message);\n          }\n        }\n      }\n\n      cropped = cropper.cropped;\n\n      switch (data.method) {\n        case 'rotate':\n          if (cropped && options.viewMode > 0) {\n            $image.cropper('clear');\n          }\n\n          break;\n\n        case 'getCroppedCanvas':\n          if (uploadedImageType === 'image/jpeg') {\n            if (!data.option) {\n              data.option = {};\n            }\n\n            data.option.fillColor = '#fff';\n          }\n\n          break;\n      }\n\n      result = $image.cropper(data.method, data.option, data.secondOption);\n\n      switch (data.method) {\n        case 'rotate':\n          if (cropped && options.viewMode > 0) {\n            $image.cropper('crop');\n          }\n\n          break;\n\n        case 'scaleX':\n        case 'scaleY':\n          $(this).data('option', -data.option);\n          break;\n\n        case 'getCroppedCanvas':\n          if (result) {\n            // Bootstrap's Modal\n            $('#getCroppedCanvasModal').modal().find('.modal-body').html(result);\n\n            if (!$download.hasClass('disabled')) {\n              download.download = uploadedImageName;\n              $download.attr('href', result.toDataURL(uploadedImageType));\n            }\n          }\n\n          break;\n\n        case 'destroy':\n          if (uploadedImageURL) {\n            URL.revokeObjectURL(uploadedImageURL);\n            uploadedImageURL = '';\n            $image.attr('src', originalImageURL);\n          }\n\n          break;\n      }\n\n      if ($.isPlainObject(result) && $target) {\n        try {\n          $target.val(JSON.stringify(result));\n        } catch (e) {\n          console.log(e.message);\n        }\n      }\n    }\n  }); // Keyboard\n\n  $(document.body).on('keydown', function (e) {\n    if (e.target !== this || !$image.data('cropper') || this.scrollTop > 300) {\n      return;\n    }\n\n    switch (e.which) {\n      case 37:\n        e.preventDefault();\n        $image.cropper('move', -1, 0);\n        break;\n\n      case 38:\n        e.preventDefault();\n        $image.cropper('move', 0, -1);\n        break;\n\n      case 39:\n        e.preventDefault();\n        $image.cropper('move', 1, 0);\n        break;\n\n      case 40:\n        e.preventDefault();\n        $image.cropper('move', 0, 1);\n        break;\n    }\n  }); // Import image\n\n  var $inputImage = $('#inputImage');\n\n  if (URL) {\n    $inputImage.change(function () {\n      var files = this.files;\n      var file;\n\n      if (!$image.data('cropper')) {\n        return;\n      }\n\n      if (files && files.length) {\n        file = files[0];\n\n        if (/^image\\/\\w+$/.test(file.type)) {\n          uploadedImageName = file.name;\n          uploadedImageType = file.type;\n\n          if (uploadedImageURL) {\n            URL.revokeObjectURL(uploadedImageURL);\n          }\n\n          uploadedImageURL = URL.createObjectURL(file);\n          $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);\n          $inputImage.val('');\n        } else {\n          window.alert('Please choose an image file.');\n        }\n      }\n    });\n  } else {\n    $inputImage.prop('disabled', true).parent().addClass('disabled');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9ybS1pbWFnZWNyb3AuaW5pdC5qcz8xMDdjIl0sIm5hbWVzIjpbIiQiLCJjb25zb2xlIiwid2luZG93IiwibG9nIiwiVVJMIiwid2Via2l0VVJMIiwiJGltYWdlIiwiJGRvd25sb2FkIiwiJGRhdGFYIiwiJGRhdGFZIiwiJGRhdGFIZWlnaHQiLCIkZGF0YVdpZHRoIiwiJGRhdGFSb3RhdGUiLCIkZGF0YVNjYWxlWCIsIiRkYXRhU2NhbGVZIiwib3B0aW9ucyIsImFzcGVjdFJhdGlvIiwicHJldmlldyIsImNyb3AiLCJlIiwidmFsIiwiTWF0aCIsInJvdW5kIiwiZGV0YWlsIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsInJvdGF0ZSIsInNjYWxlWCIsInNjYWxlWSIsIm9yaWdpbmFsSW1hZ2VVUkwiLCJhdHRyIiwidXBsb2FkZWRJbWFnZU5hbWUiLCJ1cGxvYWRlZEltYWdlVHlwZSIsInVwbG9hZGVkSW1hZ2VVUkwiLCJ0b29sdGlwIiwib24iLCJyZWFkeSIsInR5cGUiLCJjcm9wc3RhcnQiLCJhY3Rpb24iLCJjcm9wbW92ZSIsImNyb3BlbmQiLCJ6b29tIiwicmF0aW8iLCJjcm9wcGVyIiwiaXNGdW5jdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImdldENvbnRleHQiLCJwcm9wIiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwiZG93bmxvYWQiLCJhZGRDbGFzcyIsIiR0aGlzIiwibmFtZSIsImNyb3BCb3hEYXRhIiwiY2FudmFzRGF0YSIsImRhdGEiLCJjcm9wcGVkIiwiJHRhcmdldCIsInJlc3VsdCIsImhhc0NsYXNzIiwibWV0aG9kIiwiZXh0ZW5kIiwidGFyZ2V0Iiwib3B0aW9uIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsInZpZXdNb2RlIiwiZmlsbENvbG9yIiwic2Vjb25kT3B0aW9uIiwibW9kYWwiLCJmaW5kIiwiaHRtbCIsInRvRGF0YVVSTCIsInJldm9rZU9iamVjdFVSTCIsImlzUGxhaW5PYmplY3QiLCJzdHJpbmdpZnkiLCJib2R5Iiwic2Nyb2xsVG9wIiwid2hpY2giLCJwcmV2ZW50RGVmYXVsdCIsIiRpbnB1dEltYWdlIiwiY2hhbmdlIiwiZmlsZXMiLCJmaWxlIiwibGVuZ3RoIiwidGVzdCIsImNyZWF0ZU9iamVjdFVSTCIsImFsZXJ0IiwicGFyZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQVFBQSxDQUFDLENBQUMsWUFBWTtBQUNWOztBQUVBLE1BQUlDLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFQLElBQWtCO0FBQUVFLE9BQUcsRUFBRSxlQUFZLENBQUc7QUFBdEIsR0FBaEM7QUFDQSxNQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0UsR0FBUCxJQUFjRixNQUFNLENBQUNHLFNBQS9CO0FBQ0EsTUFBSUMsTUFBTSxHQUFHTixDQUFDLENBQUMsUUFBRCxDQUFkO0FBQ0EsTUFBSU8sU0FBUyxHQUFHUCxDQUFDLENBQUMsV0FBRCxDQUFqQjtBQUNBLE1BQUlRLE1BQU0sR0FBR1IsQ0FBQyxDQUFDLFFBQUQsQ0FBZDtBQUNBLE1BQUlTLE1BQU0sR0FBR1QsQ0FBQyxDQUFDLFFBQUQsQ0FBZDtBQUNBLE1BQUlVLFdBQVcsR0FBR1YsQ0FBQyxDQUFDLGFBQUQsQ0FBbkI7QUFDQSxNQUFJVyxVQUFVLEdBQUdYLENBQUMsQ0FBQyxZQUFELENBQWxCO0FBQ0EsTUFBSVksV0FBVyxHQUFHWixDQUFDLENBQUMsYUFBRCxDQUFuQjtBQUNBLE1BQUlhLFdBQVcsR0FBR2IsQ0FBQyxDQUFDLGFBQUQsQ0FBbkI7QUFDQSxNQUFJYyxXQUFXLEdBQUdkLENBQUMsQ0FBQyxhQUFELENBQW5CO0FBQ0EsTUFBSWUsT0FBTyxHQUFHO0FBQ1ZDLGVBQVcsRUFBRSxLQUFLLENBRFI7QUFFVkMsV0FBTyxFQUFFLGNBRkM7QUFHVkMsUUFBSSxFQUFFLGNBQVVDLENBQVYsRUFBYTtBQUNmWCxZQUFNLENBQUNZLEdBQVAsQ0FBV0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILENBQUMsQ0FB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bEQsSUFBekI7O0FBRUEsY0FBSUosZ0JBQUosRUFBc0I7QUFDbEIvQixlQUFHLENBQUMyRSxlQUFKLENBQW9CNUMsZ0JBQXBCO0FBQ0g7O0FBRURBLDBCQUFnQixHQUFHL0IsR0FBRyxDQUFDd0YsZUFBSixDQUFvQkgsSUFBcEIsQ0FBbkI7QUFDQW5GLGdCQUFNLENBQUN3QyxPQUFQLENBQWUsU0FBZixFQUEwQmQsSUFBMUIsQ0FBK0IsS0FBL0IsRUFBc0NHLGdCQUF0QyxFQUF3RFcsT0FBeEQsQ0FBZ0UvQixPQUFoRTtBQUNBdUUscUJBQVcsQ0FBQ2xFLEdBQVosQ0FBZ0IsRUFBaEI7QUFDSCxTQVhELE1BV087QUFDSGxCLGdCQUFNLENBQUMyRixLQUFQLENBQWEsOEJBQWI7QUFDSDtBQUNKO0FBQ0osS0ExQkQ7QUEyQkgsR0E1QkQsTUE0Qk87QUFDSFAsZUFBVyxDQUFDbkMsSUFBWixDQUFpQixVQUFqQixFQUE2QixJQUE3QixFQUFtQzJDLE1BQW5DLEdBQTRDdkMsUUFBNUMsQ0FBcUQsVUFBckQ7QUFDSDtBQUNKLENBclFBLENBQUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvZm9ybS1pbWFnZWNyb3AuaW5pdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UZW1wbGF0ZSBOYW1lOiBVYm9sZCAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXG5BdXRob3I6IENvZGVyVGhlbWVzXG5XZWJzaXRlOiBodHRwczovL2NvZGVydGhlbWVzLmNvbS9cbkNvbnRhY3Q6IHN1cHBvcnRAY29kZXJ0aGVtZXMuY29tXG5GaWxlOiBJbWFnZSBjcm9wIGluaXQganNcbiovXG5cbiQoZnVuY3Rpb24gKCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGUgfHwgeyBsb2c6IGZ1bmN0aW9uICgpIHsgfSB9O1xuICAgIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkw7XG4gICAgdmFyICRpbWFnZSA9ICQoJyNpbWFnZScpO1xuICAgIHZhciAkZG93bmxvYWQgPSAkKCcjZG93bmxvYWQnKTtcbiAgICB2YXIgJGRhdGFYID0gJCgnI2RhdGFYJyk7XG4gICAgdmFyICRkYXRhWSA9ICQoJyNkYXRhWScpO1xuICAgIHZhciAkZGF0YUhlaWdodCA9ICQoJyNkYXRhSGVpZ2h0Jyk7XG4gICAgdmFyICRkYXRhV2lkdGggPSAkKCcjZGF0YVdpZHRoJyk7XG4gICAgdmFyICRkYXRhUm90YXRlID0gJCgnI2RhdGFSb3RhdGUnKTtcbiAgICB2YXIgJGRhdGFTY2FsZVggPSAkKCcjZGF0YVNjYWxlWCcpO1xuICAgIHZhciAkZGF0YVNjYWxlWSA9ICQoJyNkYXRhU2NhbGVZJyk7XG4gICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgIGFzcGVjdFJhdGlvOiAxNiAvIDksXG4gICAgICAgIHByZXZpZXc6ICcuaW1nLXByZXZpZXcnLFxuICAgICAgICBjcm9wOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgJGRhdGFYLnZhbChNYXRoLnJvdW5kKGUuZGV0YWlsLngpKTtcbiAgICAgICAgICAgICRkYXRhWS52YWwoTWF0aC5yb3VuZChlLmRldGFpbC55KSk7XG4gICAgICAgICAgICAkZGF0YUhlaWdodC52YWwoTWF0aC5yb3VuZChlLmRldGFpbC5oZWlnaHQpKTtcbiAgICAgICAgICAgICRkYXRhV2lkdGgudmFsKE1hdGgucm91bmQoZS5kZXRhaWwud2lkdGgpKTtcbiAgICAgICAgICAgICRkYXRhUm90YXRlLnZhbChlLmRldGFpbC5yb3RhdGUpO1xuICAgICAgICAgICAgJGRhdGFTY2FsZVgudmFsKGUuZGV0YWlsLnNjYWxlWCk7XG4gICAgICAgICAgICAkZGF0YVNjYWxlWS52YWwoZS5kZXRhaWwuc2NhbGVZKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9yaWdpbmFsSW1hZ2VVUkwgPSAkaW1hZ2UuYXR0cignc3JjJyk7XG4gICAgdmFyIHVwbG9hZGVkSW1hZ2VOYW1lID0gJ2Nyb3BwZWQuanBnJztcbiAgICB2YXIgdXBsb2FkZWRJbWFnZVR5cGUgPSAnaW1hZ2UvanBlZyc7XG4gICAgdmFyIHVwbG9hZGVkSW1hZ2VVUkw7XG5cbiAgICAvLyBUb29sdGlwXG4gICAgJCgnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScpLnRvb2x0aXAoKTtcblxuICAgIC8vIENyb3BwZXJcbiAgICAkaW1hZ2Uub24oe1xuICAgICAgICByZWFkeTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNyb3BzdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudHlwZSwgZS5kZXRhaWwuYWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY3JvcG1vdmU6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZGV0YWlsLmFjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNyb3BlbmQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUsIGUuZGV0YWlsLmFjdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIGNyb3A6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnR5cGUpO1xuICAgICAgICB9LFxuICAgICAgICB6b29tOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50eXBlLCBlLmRldGFpbC5yYXRpbyk7XG4gICAgICAgIH1cbiAgICB9KS5jcm9wcGVyKG9wdGlvbnMpO1xuXG4gICAgLy8gQnV0dG9uc1xuICAgIGlmICghJC5pc0Z1bmN0aW9uKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpLmdldENvbnRleHQpKSB7XG4gICAgICAgICQoJ2J1dHRvbltkYXRhLW1ldGhvZD1cImdldENyb3BwZWRDYW52YXNcIl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY3JvcHBlcicpLnN0eWxlLnRyYW5zaXRpb24gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICQoJ2J1dHRvbltkYXRhLW1ldGhvZD1cInJvdGF0ZVwiXScpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICQoJ2J1dHRvbltkYXRhLW1ldGhvZD1cInNjYWxlXCJdJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBEb3dubG9hZFxuICAgIGlmICh0eXBlb2YgJGRvd25sb2FkWzBdLmRvd25sb2FkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAkZG93bmxvYWQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uc1xuICAgICQoJy5kb2NzLXRvZ2dsZXMnKS5vbignY2hhbmdlJywgJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgbmFtZSA9ICR0aGlzLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgdmFyIHR5cGUgPSAkdGhpcy5wcm9wKCd0eXBlJyk7XG4gICAgICAgIHZhciBjcm9wQm94RGF0YTtcbiAgICAgICAgdmFyIGNhbnZhc0RhdGE7XG5cbiAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9ICR0aGlzLnByb3AoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIGNyb3BCb3hEYXRhID0gJGltYWdlLmNyb3BwZXIoJ2dldENyb3BCb3hEYXRhJyk7XG4gICAgICAgICAgICBjYW52YXNEYXRhID0gJGltYWdlLmNyb3BwZXIoJ2dldENhbnZhc0RhdGEnKTtcblxuICAgICAgICAgICAgb3B0aW9ucy5yZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignc2V0Q3JvcEJveERhdGEnLCBjcm9wQm94RGF0YSk7XG4gICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ3NldENhbnZhc0RhdGEnLCBjYW52YXNEYXRhKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9ICR0aGlzLnZhbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgJGltYWdlLmNyb3BwZXIoJ2Rlc3Ryb3knKS5jcm9wcGVyKG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgLy8gTWV0aG9kc1xuICAgICQoJy5kb2NzLWJ1dHRvbnMnKS5vbignY2xpY2snLCAnW2RhdGEtbWV0aG9kXScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgdmFyIGRhdGEgPSAkdGhpcy5kYXRhKCk7XG4gICAgICAgIHZhciBjcm9wcGVyID0gJGltYWdlLmRhdGEoJ2Nyb3BwZXInKTtcbiAgICAgICAgdmFyIGNyb3BwZWQ7XG4gICAgICAgIHZhciAkdGFyZ2V0O1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGlmICgkdGhpcy5wcm9wKCdkaXNhYmxlZCcpIHx8ICR0aGlzLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JvcHBlciAmJiBkYXRhLm1ldGhvZCkge1xuICAgICAgICAgICAgZGF0YSA9ICQuZXh0ZW5kKHt9LCBkYXRhKTsgLy8gQ2xvbmUgYSBuZXcgb25lXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YS50YXJnZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgJHRhcmdldCA9ICQoZGF0YS50YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhLm9wdGlvbiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEub3B0aW9uID0gSlNPTi5wYXJzZSgkdGFyZ2V0LnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3JvcHBlZCA9IGNyb3BwZXIuY3JvcHBlZDtcblxuICAgICAgICAgICAgc3dpdGNoIChkYXRhLm1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JvdGF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9wcGVkICYmIG9wdGlvbnMudmlld01vZGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignY2xlYXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2V0Q3JvcHBlZENhbnZhcyc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGxvYWRlZEltYWdlVHlwZSA9PT0gJ2ltYWdlL2pwZWcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWRhdGEub3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5vcHRpb24gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5vcHRpb24uZmlsbENvbG9yID0gJyNmZmYnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9ICRpbWFnZS5jcm9wcGVyKGRhdGEubWV0aG9kLCBkYXRhLm9wdGlvbiwgZGF0YS5zZWNvbmRPcHRpb24pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGRhdGEubWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncm90YXRlJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNyb3BwZWQgJiYgb3B0aW9ucy52aWV3TW9kZSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdjcm9wJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3NjYWxlWCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc2NhbGVZJzpcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdvcHRpb24nLCAtZGF0YS5vcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2dldENyb3BwZWRDYW52YXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBCb290c3RyYXAncyBNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2dldENyb3BwZWRDYW52YXNNb2RhbCcpLm1vZGFsKCkuZmluZCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3VsdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJGRvd25sb2FkLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQuZG93bmxvYWQgPSB1cGxvYWRlZEltYWdlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZG93bmxvYWQuYXR0cignaHJlZicsIHJlc3VsdC50b0RhdGFVUkwodXBsb2FkZWRJbWFnZVR5cGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZGVzdHJveSc6XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGxvYWRlZEltYWdlVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVwbG9hZGVkSW1hZ2VVUkwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkZWRJbWFnZVVSTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgJGltYWdlLmF0dHIoJ3NyYycsIG9yaWdpbmFsSW1hZ2VVUkwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QocmVzdWx0KSAmJiAkdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgJHRhcmdldC52YWwoSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gS2V5Ym9hcmRcbiAgICAkKGRvY3VtZW50LmJvZHkpLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSB0aGlzIHx8ICEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpIHx8IHRoaXMuc2Nyb2xsVG9wID4gMzAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICRpbWFnZS5jcm9wcGVyKCdtb3ZlJywgLTEsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignbW92ZScsIDAsIC0xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAxLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJGltYWdlLmNyb3BwZXIoJ21vdmUnLCAwLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gSW1wb3J0IGltYWdlXG4gICAgdmFyICRpbnB1dEltYWdlID0gJCgnI2lucHV0SW1hZ2UnKTtcblxuICAgIGlmIChVUkwpIHtcbiAgICAgICAgJGlucHV0SW1hZ2UuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmaWxlcyA9IHRoaXMuZmlsZXM7XG4gICAgICAgICAgICB2YXIgZmlsZTtcblxuICAgICAgICAgICAgaWYgKCEkaW1hZ2UuZGF0YSgnY3JvcHBlcicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmlsZSA9IGZpbGVzWzBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKC9eaW1hZ2VcXC9cXHcrJC8udGVzdChmaWxlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2VOYW1lID0gZmlsZS5uYW1lO1xuICAgICAgICAgICAgICAgICAgICB1cGxvYWRlZEltYWdlVHlwZSA9IGZpbGUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodXBsb2FkZWRJbWFnZVVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh1cGxvYWRlZEltYWdlVVJMKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZGVkSW1hZ2VVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAkaW1hZ2UuY3JvcHBlcignZGVzdHJveScpLmF0dHIoJ3NyYycsIHVwbG9hZGVkSW1hZ2VVUkwpLmNyb3BwZXIob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dEltYWdlLnZhbCgnJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdQbGVhc2UgY2hvb3NlIGFuIGltYWdlIGZpbGUuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkaW5wdXRJbWFnZS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpLnBhcmVudCgpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/form-imagecrop.init.js\n");

/***/ }),

/***/ 26:
/*!*********************************************************!*\
  !*** multi ./resources/js/pages/form-imagecrop.init.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\UBold\resources\js\pages\form-imagecrop.init.js */"./resources/js/pages/form-imagecrop.init.js");


/***/ })

/******/ });