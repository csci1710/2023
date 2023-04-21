import { Fragment } from "react";
import { classNames } from "../App";
import { Lecture, LectureWeek, lectureWeeks } from "../SITE_DATA";
// import type LectureWeek from "../SITE_DATA";

type LecturesTableProps = {
  weeks: LectureWeek[];
};

export default function LecturesTable(props: LecturesTableProps) {
  return (
    <div className="flex flex-col items-stretch w-5/6 justify-center">
      <div className="flex items-center justify-center">
        <ol className="text-left w-5/6 relative border-l border-gray-200 dark:border-gray-700">
          {props.weeks.map((week, idx) => (
            <Fragment key={week.name}>
              {/* <div
              className={
                idx !== 0 ? "mt-6 pt-6 border-t-2 border-neutral-600" : ""
              }
            /> */}
              <div className={"flex flex-col"}>
                <h4 className="font-title text-5xl mt-10 pl-4"> {week.name}</h4>
                <div className="p-2" />

                {week.dailyLectures.map((lecture) => (
                  <div className="mt-2 text-xl">
                    <LectureDay lecture={lecture} />
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </ol>
      </div>
    </div>
  );
}

const linkClassName =
  "inline-flex items-center px-4 py-2 text-sm font-bold text-primary-700 bg-white border border-gray-200 rounded-lg hover:bg-primary-500 hover:text-neutral-50 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-primary-400";

function LectureDay(props: { lecture: Lecture }) {
  return (
    <li className="mb-4 ml-4 items-stretch ">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.lecture.date}
      </time>
      <h3 className="text-2xl font-title text-gray-900 dark:text-white">
        {props.lecture.name}
      </h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 w-full ">
        {props.lecture.description}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-1">
        {props.lecture.notesLink && (
          <a href={props.lecture.notesLink} className={linkClassName}>
            Notes
          </a>
        )}
        {props.lecture.recordingLink && (
          <a href={props.lecture.recordingLink} className={linkClassName}>
            Recording
          </a>
        )}
        {props.lecture.liveCodeLink && (
          <a href={props.lecture.liveCodeLink} className={linkClassName}>
            Livecode
          </a>
        )}
        {props.lecture.otherLinks?.map((otherLink) => (
          <a href={otherLink.link} className={linkClassName}>
            {otherLink.name}
          </a>
        ))}
      </div>
    </li>
  );
}

// // function LectureDayOld(props: { lecture: Lecture }) {
//   return (
//     <div className="flex text-center items-center justify-center space-x-2 text-neutral-900 px-4">
//       <p className="font-bold">
//         <span className="text-neutral-600 font-medium">
//           {props.lecture.date}:{" "}
//         </span>
//         {props.lecture.name}
//       </p>
//       <div className="flex space-x-2">
//         {props.lecture.notesLink && (
//           <a
//             href={props.lecture.notesLink}
//             className="text-primary-500 underline"
//           >
//             Notes
//           </a>
//         )}
//         {props.lecture.recordingLink && (
//           <a
//             href={props.lecture.recordingLink}
//             className="text-primary-500 underline"
//           >
//             Recording
//           </a>
//         )}
//         {props.lecture.liveCodeLink && (
//           <a
//             href={props.lecture.liveCodeLink}
//             className="text-primary-500 underline"
//           >
//             Livecode
//           </a>
//         )}
//         {props.lecture.otherLinks?.map((otherLink) => (
//           <a href={otherLink.link} className="text-primary-500 underline">
//             {otherLink.name}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }
