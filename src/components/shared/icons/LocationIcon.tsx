import React from "react";

export default function LocationIcon({ fill = "white" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 512 512"
			id="location">
			<path
				fill={fill}
				d="M330.774,133.71c8.689,19.569,34.498,55.871,55.235,85.041,6.916,9.728,13.564,19.081,19.161,27.211,5.597-8.131,12.247-17.485,19.163-27.214,20.737-29.168,46.544-65.469,55.233-85.038,13.645-30.732,6.916-67.277-16.744-90.938-15.33-15.329-35.804-23.771-57.652-23.771s-42.322,8.442-57.652,23.771c-23.661,23.661-30.39,60.206-16.745,90.938Zm41.328-66.355c18.235-18.235,47.903-18.234,66.137,0,18.234,18.234,18.234,47.903,0,66.137-9.117,9.117-21.093,13.676-33.069,13.676s-23.951-4.559-33.068-13.676c-18.234-18.234-18.234-47.903,0-66.137Z"></path>
			<path
				fill={fill}
				d="M147.964 97.223h1.197c15.71-.012 37.213-.025 47.834 12.494 4.909 5.785 6.654 13.204 5.188 22.05-1.02 6.154 1.011 8.272 5.462 12.914 9.663 10.077 17.322 21.579 5.087 51.237-1.458 3.534.231 8.769 2.187 14.83 4.146 12.845 10.41 32.256-16.3 47.647l-1.48.845c-53.182 30.272-60.292 43.501-61.227 46.206.473.295 1.38.75 2.99 1.218 10.184 2.959 13.57.031 19.181-4.823 11.414-9.876 23.365-16.383 54.118 4.154 6.086 4.064 11.567 5.249 16.292 3.518 5.942-2.177 11.127-9.174 13.869-18.718.512-1.78 1.08-3.962 1.738-6.489 5.172-19.862 12.965-49.779 32.935-49.779.202 0 .402.003.606.009 8.754.262 19.934-.666 23.443-6.583 6.495-10.952-9.33-37.95-17.832-52.454-2.228-3.801-4.152-7.083-5.635-9.89-9.824-18.594-1.586-41.924 10.226-55.733 6.167-7.21 13.189-11.65 20.033-12.946.828-22.021 9.009-43.567 23.775-60.567-24.275-8.275-49.664-12.473-75.65-12.473-54.213 0-104.184 18.495-143.95 49.498 9.523 11.97 22.376 23.835 35.914 23.835zM372.268 398.221c-10.691-1.783-23.035 3.656-36.693 16.178-21.196 19.434-31.264 25.335-39.902 23.397-7.428-1.669-10.129-8.303-12.3-13.634-3.156-7.75-5.648-13.871-19.129-13.871-18.846 0-24.705 3.236-26.52 5.165-1.766 1.877-1.66 5.167-1.342 10.377.41 6.703.919 15.045-5.413 21.956-5.936 6.478-16.459 9.699-33.12 10.138-4.632.122-16.296.446-20.583 21.463 24.622 8.8 51.125 13.609 78.733 13.609 58.833 0 112.672-21.778 153.892-57.69-10.036-17.642-22.245-34.517-37.624-37.088zM39.708 301.109c3.064-2.216 4.599-8.528 4.322-17.773-.538-17.938 25.077-24.608 42.027-29.023 2.072-.54 3.861-1.005 5.311-1.422 7.424-2.133 12.834-6.075 14.472-10.544 1.26-3.442.337-7.526-2.744-12.14-17.459-26.145-11.83-36.419-3.313-46.262 3.932-4.543 5.905-6.824 3.682-14.47-.109-.375-.215-.693-.315-.961-3.507 2.083-14.454 11.11-36.142 49.213l-.697 1.221c-13.242 22.98-30.547 17.396-40.885 14.061-.854-.276-1.687-.54-2.506-.792-.963 8.615-1.475 17.364-1.475 26.231 0 14.359 1.304 28.419 3.787 42.073 6.795 2.232 11.902 2.452 14.477.59z"></path>
			<path
				fill={fill}
				d="M485.22,157.174c3.7-6.29,6.776-12.032,8.969-16.971,16.312-36.737,8.252-80.438-20.054-108.745-18.351-18.352-42.844-28.458-68.965-28.458-22.334,0-43.473,7.394-60.605,21.006-28.267-10.69-58.035-16.117-88.565-16.117-66.926,0-129.846,26.062-177.169,73.386S5.445,191.519,5.445,258.445s26.062,129.846,73.386,177.169c47.324,47.323,110.244,73.386,177.169,73.386s129.846-26.062,177.169-73.386c47.323-47.323,73.386-110.243,73.386-177.169,0-35.281-7.189-69.324-21.335-101.271Zm-22.398-114.402c23.66,23.661,30.389,60.206,16.744,90.938-8.689,19.568-34.496,55.869-55.233,85.038-6.916,9.729-13.566,19.083-19.163,27.214-5.597-8.13-12.246-17.483-19.161-27.211-20.738-29.169-46.546-65.472-55.235-85.041-13.645-30.732-6.916-67.277,16.745-90.938,15.33-15.329,35.804-23.771,57.652-23.771s42.322,8.442,57.652,23.771Zm-131.173-6.409c-14.767,17-22.947,38.545-23.775,60.567-6.843,1.296-13.866,5.736-20.033,12.946-11.812,13.809-20.05,37.139-10.226,55.733,1.483,2.807,3.407,6.089,5.635,9.89,8.502,14.504,24.327,41.502,17.832,52.454-3.509,5.917-14.688,6.844-23.443,6.583-.205-.006-.405-.009-.606-.009-19.969,0-27.762,29.917-32.935,49.779-.658,2.526-1.226,4.708-1.738,6.489-2.742,9.544-7.927,16.541-13.869,18.718-4.724,1.731-10.206,.547-16.292-3.518-30.753-20.537-42.704-14.031-54.118-4.154-5.61,4.854-8.997,7.782-19.181,4.823-1.61-.468-2.517-.923-2.99-1.218,.935-2.705,8.045-15.934,61.227-46.206l1.48-.845c26.71-15.392,20.446-34.803,16.3-47.647-1.956-6.061-3.645-11.295-2.187-14.83,12.235-29.658,4.576-41.16-5.087-51.237-4.451-4.642-6.482-6.76-5.462-12.914,1.466-8.846-.279-16.265-5.188-22.05-10.621-12.519-32.124-12.505-47.834-12.494h-1.197c-13.538,0-26.391-11.865-35.914-23.835,39.766-31.002,89.737-49.498,143.95-49.498,25.985,0,51.375,4.198,75.65,12.473ZM103.096,230.206c3.082,4.614,4.004,8.698,2.744,12.14-1.637,4.469-7.047,8.411-14.472,10.544-1.45,.417-3.239,.882-5.311,1.422-16.95,4.415-42.565,11.085-42.027,29.023,.277,9.245-1.257,15.557-4.322,17.773-2.575,1.861-7.682,1.642-14.477-.59-2.483-13.654-3.787-27.714-3.787-42.073,0-8.868,.512-17.617,1.475-26.231,.819,.252,1.651,.517,2.506,.792,10.338,3.336,27.644,8.92,40.885-14.061l.697-1.221c21.688-38.103,32.634-47.129,36.142-49.213,.1,.269,.206,.587,.315,.961,2.223,7.646,.25,9.927-3.682,14.47-8.517,9.843-14.146,20.117,3.313,46.262Zm74.171,249.184c4.287-21.017,15.951-21.341,20.583-21.463,16.661-.438,27.185-3.66,33.12-10.138,6.332-6.911,5.822-15.252,5.413-21.956-.318-5.211-.424-8.5,1.342-10.377,1.815-1.929,7.673-5.165,26.52-5.165,13.48,0,15.973,6.121,19.129,13.871,2.171,5.331,4.873,11.964,12.3,13.634,8.639,1.938,18.706-3.963,39.902-23.397,13.658-12.522,26.001-17.961,36.693-16.178,15.379,2.571,27.588,19.446,37.624,37.088-41.219,35.912-95.058,57.69-153.892,57.69-27.608,0-54.111-4.809-78.733-13.609Zm244.621-55.28c-11.657-19.773-26.367-38.223-46.982-41.669-15.797-2.643-32.668,4.145-50.143,20.166-15.941,14.616-22.466,18.338-24.952,19.25-.514-1.012-1.13-2.525-1.62-3.727-3.392-8.331-9.707-23.837-33.947-23.837-19.763,0-31.536,3.146-38.173,10.202-6.594,7.009-6.053,15.857-5.659,22.317,.313,5.125,.421,8.358-1.239,10.171-1.536,1.676-6.403,4.548-21.744,4.952-10.806,.285-28.631,5.016-35.195,31.486-65.079-28.496-114.831-85.694-133.141-155.501,2.012,.314,3.932,.474,5.762,.473,5.533,0,10.249-1.438,14.23-4.318,7.821-5.656,11.4-15.868,10.939-31.218-.015-.478,1.32-2.897,8.113-6.012,6.709-3.078,15.52-5.372,21.954-7.048,2.085-.542,4.054-1.056,5.697-1.527,12.499-3.591,21.639-11.034,25.077-20.42,2.142-5.847,3.106-15.196-4.462-26.528-7.36-11.021-8.766-16.775-8.649-19.662,.101-2.483,1.412-4.104,4.13-7.245,4.619-5.338,11.6-13.405,6.946-29.408-3.005-10.332-9.409-12.576-12.958-12.994-8.674-1.026-22.503,4.627-52.767,57.798l-.655,1.147c-6.779,11.767-11.901,10.115-22.109,6.821-1.663-.536-3.355-1.08-5.079-1.554,9.538-52.256,36.451-98.516,74.51-132.57,15.669,19.624,31.854,29.568,48.194,29.568h1.208c11.149-.007,29.799-.02,35.624,6.845,1.117,1.316,2.498,3.689,1.604,9.082-2.331,14.06,4.621,21.311,9.697,26.604,6.21,6.477,11.115,11.592,1.845,34.062-3.697,8.962-.802,17.931,1.751,25.845,4.013,12.435,6.435,19.94-9.062,28.87l-1.407,.803c-63.708,36.264-70.525,52.397-69.347,62.4,.56,4.751,3.54,11.087,14.558,14.292,18.539,5.393,27.544-2.399,34.118-8.087,4.011-3.471,6.271-5.289,9.856-5.434,5.436-.227,13.849,3.411,24.907,10.794,7.894,5.271,14.93,6.99,20.751,6.99,3.888,0,7.234-.767,9.929-1.754,10.88-3.985,19.534-14.672,23.744-29.323,.567-1.973,1.158-4.245,1.843-6.875,2.051-7.876,4.86-18.664,8.662-26.952,3.675-8.013,6.974-10.858,8.861-10.858,.019,0,.037,0,.055,0,18.996,.571,31.674-4.28,37.684-14.414,11.307-19.066-6.203-48.939-17.79-68.707-2.132-3.638-3.974-6.779-5.292-9.274-5.988-11.334-.225-27.964,8.238-37.858,2.881-3.367,5.954-5.798,8.634-6.975,1.188,9.159,3.664,18.225,7.516,26.902,9.341,21.037,34.564,56.516,56.818,87.818,9.859,13.868,19.172,26.967,25.512,36.635,1.479,2.254,3.994,3.613,6.69,3.613s5.211-1.358,6.69-3.613c6.34-9.668,15.653-22.769,25.514-36.638,12.686-17.844,26.333-37.043,37.457-54.153,10.429,26.903,15.724,55.282,15.724,84.58,0,64.61-26.261,123.202-68.667,165.665Zm-16.718-276.942c11.976,0,23.952-4.559,33.069-13.676,18.234-18.234,18.234-47.903,0-66.137-18.234-18.234-47.902-18.235-66.137,0-18.234,18.234-18.234,47.903,0,66.137,9.117,9.117,21.093,13.676,33.068,13.676Zm-21.755-68.5c5.998-5.998,13.876-8.997,21.755-8.997s15.757,2.999,21.755,8.997c11.996,11.996,11.996,31.514,0,43.51-11.996,11.995-31.514,11.996-43.51,0-11.996-11.996-11.996-31.515,0-43.51Zm24.851,215.539l-5.092,12.771c-1.249,3.132-4.255,5.039-7.434,5.039-.986,0-1.988-.183-2.96-.571-4.104-1.636-6.104-6.29-4.468-10.394l5.092-12.771c1.636-4.104,6.289-6.103,10.394-4.468,4.104,1.636,6.104,6.29,4.468,10.394Zm-37.273,40.385c2.34,3.748,1.198,8.683-2.55,11.022l-11.726,7.32c-1.317,.823-2.782,1.215-4.229,1.215-2.668,0-5.277-1.334-6.794-3.765-2.34-3.748-1.198-8.683,2.55-11.022l11.726-7.32c3.748-2.341,8.684-1.197,11.022,2.55Zm-122.688,16.71c.59,4.378-2.482,8.406-6.861,8.996l-15.132,2.038c-.362,.049-.722,.073-1.078,.073-3.944,0-7.377-2.917-7.918-6.934-.59-4.378,2.482-8.406,6.861-8.996l15.132-2.038c4.374-.587,8.406,2.481,8.996,6.861Zm-62.148,19.371c1.624,4.109-.39,8.757-4.499,10.381l-12.168,4.81c-.965,.381-1.96,.562-2.938,.562-3.188,0-6.2-1.917-7.442-5.061-1.624-4.109,.39-8.757,4.499-10.381l12.168-4.81c4.111-1.625,8.756,.391,10.381,4.499Zm-60.681,20.093c-.695,3.871-4.065,6.588-7.865,6.588-.469,0-.944-.042-1.422-.127l-13.179-2.365c-4.349-.78-7.242-4.938-6.461-9.287s4.938-7.242,9.287-6.461l13.179,2.365c4.349,.78,7.242,4.938,6.461,9.287Zm-43.382-43.203c.858,4.334-1.959,8.543-6.294,9.402-.524,.104-1.047,.154-1.562,.154-3.741,0-7.084-2.638-7.839-6.448l-2.605-13.158c-.858-4.334,1.959-8.543,6.293-9.401,4.336-.854,8.543,1.959,9.402,6.293l2.605,13.158Zm230.223,9.214c-.125,4.337-3.682,7.769-7.992,7.769-.079,0-.157,0-.235-.003l-14.683-.424c-4.417-.127-7.893-3.811-7.766-8.228,.128-4.417,3.848-7.892,8.228-7.766l14.683,.424c4.417,.127,7.893,3.811,7.766,8.228Z"></path>
		</svg>
	);
}
