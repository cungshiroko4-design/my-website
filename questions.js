const scenarios = [
  {
    "obstacleIcon": "🚦 Ngã tư có đèn giao thông",
    "question": "Bạn đang lái xe đến ngã tư, đèn giao thông chuyển sang màu vàng và xe bạn chưa đè lên vạch dừng. Bạn xử lý thế nào?",
    "options": [
      {
        "text": "Phanh dừng lại trước vạch dừng.",
        "correct": true
      },
      {
        "text": "Tăng tốc vượt qua ngã tư trước khi đèn chuyển đỏ.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục và đi tiếp.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi gặp đèn vàng, người điều khiển phương tiện phải dừng lại trước vạch dừng. Trừ trường hợp đã đi quá vạch dừng thì mới được đi tiếp."
  },
  {
    "obstacleIcon": "🚑 Xe ưu tiên",
    "question": "Phía sau xe bạn có xe cứu thương đang phát tín hiệu còi, đèn ưu tiên. Bạn cần làm gì?",
    "options": [
      {
        "text": "Tăng tốc chạy nhanh phía trước để không cản đường.",
        "correct": false
      },
      {
        "text": "Giảm tốc độ, chủ động tạt sang bên phải và dừng/nhường đường.",
        "correct": true
      },
      {
        "text": "Giữ nguyên tốc độ và làn đường đang đi.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe ưu tiên, phải giảm tốc độ, tạt vào lề đường bên phải và nhường đường, không được cản trở."
  },
  {
    "obstacleIcon": "🍺 Nồng độ cồn",
    "question": "Bạn đã uống 1 ly bia tại tiệc liên hoan và cảm thấy rất tỉnh táo. Bạn sẽ?",
    "options": [
      {
        "text": "Lái xe về nhà chậm rãi.",
        "correct": false
      },
      {
        "text": "Đi sát lề đường bên phải để về.",
        "correct": false
      },
      {
        "text": "Không lái xe, gọi xe công nghệ hoặc nhờ người không uống cồn chở về.",
        "correct": true
      }
    ],
    "lawExplanation": "Nghiêm cấm tuyệt đối điều khiển phương tiện giao thông khi trong máu hoặc hơi thở có nồng độ cồn (mức 0)."
  },
  {
    "obstacleIcon": "🛑 Biển báo STOP",
    "question": "Gặp biển báo hiệu hình bát giác màu đỏ có chữ 'STOP', bạn phải làm gì?",
    "options": [
      {
        "text": "Giảm tốc độ và đi tiếp nếu đường vắng.",
        "correct": false
      },
      {
        "text": "Dừng lại tuyệt đối trước vạch dừng hoặc trước biển báo.",
        "correct": true
      },
      {
        "text": "Chỉ dừng khi có xe khác đang đến.",
        "correct": false
      }
    ],
    "lawExplanation": "Biển STOP buộc tất cả các phương tiện phải dừng lại trước vạch dừng hoặc trước biển báo, quan sát an toàn mới được đi."
  },
  {
    "obstacleIcon": "🚴 Người đi bộ qua đường",
    "question": "Đến vạch đường dành cho người đi bộ, có người đang chuẩn bị sang đường. Bạn xử lý sao?",
    "options": [
      {
        "text": "Giảm tốc độ hoặc dừng lại nhường đường cho người đi bộ.",
        "correct": true
      },
      {
        "text": "Bóp còi xin đường và đi nhanh qua.",
        "correct": false
      },
      {
        "text": "Lách qua phía sau người đi bộ.",
        "correct": false
      }
    ],
    "lawExplanation": "Phải giảm tốc độ, nhường đường cho người đi bộ đang qua đường tại nơi có vạch kẻ đường dành cho người đi bộ."
  },
  {
    "obstacleIcon": "🏎️ Vượt xe",
    "question": "Bạn muốn vượt xe phía trước. Điều kiện nào dưới đây là ĐÚNG quy định?",
    "options": [
      {
        "text": "Vượt bên phải khi đường rộng.",
        "correct": false
      },
      {
        "text": "Báo hiệu bằng đèn/còi, chỉ vượt khi không có vật cản phía trước và xe trước không có tín hiệu vượt xe khác.",
        "correct": true
      },
      {
        "text": "Vượt ngay trên đoạn đường cong vision hẹp.",
        "correct": false
      }
    ],
    "lawExplanation": "Chỉ được vượt khi không có vạch liền cấm vượt, phía trước trống, không có xe đi ngược chiều và xe trước đã nhường đường."
  },
  {
    "obstacleIcon": "🚗 Chuyển làn đường",
    "question": "Khi muốn chuyển làn đường, người lái xe phải thực hiện thao tác nào trước?",
    "options": [
      {
        "text": "Quan sát gương, bật đèn tín hiệu (xi-nhan) xin đường và chỉ chuyển làn khi đảm bảo an toàn.",
        "correct": true
      },
      {
        "text": "Bật đèn xi-nhan và chuyển làn ngay lập tức.",
        "correct": false
      },
      {
        "text": "Tăng tốc để vượt lên rồi chuyển làn.",
        "correct": false
      }
    ],
    "lawExplanation": "Chuyển làn phải có tín hiệu báo trước và phải bảo đảm an toàn cho các xe xung quanh."
  },
  {
    "obstacleIcon": "🔄 Vòng xoay (Bùng binh)",
    "question": "Tại ngã tư có đảo an toàn (vòng xoay), bạn phải nhường đường cho xe đến từ hướng nào?",
    "options": [
      {
        "text": "Nhường đường cho xe đến từ bên phải.",
        "correct": false
      },
      {
        "text": "Nhường đường cho xe đến từ bên trái (đang trong vòng xoay).",
        "correct": true
      },
      {
        "text": "Không cần nhường đường cho ai.",
        "correct": false
      }
    ],
    "lawExplanation": "Tại nơi giao nhau có đảo an toàn (vòng xoay), phải nhường đường cho xe đi từ bên trái tiến đến."
  },
  {
    "obstacleIcon": "🌧️ Mưa to sương mù",
    "question": "Khi điều khiển xe trong điều kiện thời tiết mưa to hoặc sương mù dày đặc, bạn nên?",
    "options": [
      {
        "text": "Bật đèn chiếu xa (đèn pha) để nhìn rõ hơn.",
        "correct": false
      },
      {
        "text": "Bật đèn chiếu gần/đèn sương mù, giảm tốc độ và giữ khoảng cách an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc để nhanh chóng thoát khỏi vùng sương mù.",
        "correct": false
      }
    ],
    "lawExplanation": "Mưa to/sương mù phải bật đèn chiếu gần hoặc đèn sương mù, giảm tốc độ và không bật đèn pha vì bị phản xạ chói mắt."
  },
  {
    "obstacleIcon": "📱 Sử dụng điện thoại",
    "question": "Người điều khiển xe máy/ô tô có được phép dùng tay cầm điện thoại để nghe/gọi khi đang di chuyển không?",
    "options": [
      {
        "text": "Được phép nếu dùng 1 tay.",
        "correct": false
      },
      {
        "text": "Nghiêm cấm sử dụng tay cầm điện thoại khi đang điều khiển xe di chuyển trên đường.",
        "correct": true
      },
      {
        "text": "Được phép nếu chạy dưới 20 km/h.",
        "correct": false
      }
    ],
    "lawExplanation": "Luật nghiêm cấm dùng tay cầm điện thoại thông minh/thiết bị điện tử khi đang lái xe di chuyển."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 11: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 12: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 13: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 14: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 15: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 16: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 17: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 18: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 19: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 20: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 21: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 22: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 23: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 24: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 25: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 26: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 27: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 28: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 29: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 30: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 31: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 32: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 33: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 34: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 35: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 36: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 37: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 38: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 39: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 40: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 41: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 42: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 43: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 44: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 45: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 46: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 47: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 48: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 49: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 50: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 51: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 52: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 53: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 54: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 55: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 56: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 57: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 58: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 59: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 60: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 61: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 62: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 63: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 64: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 65: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 66: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 67: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 68: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 69: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 70: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 71: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 72: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 73: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 74: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 75: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 76: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 77: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 78: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 79: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 80: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 81: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 82: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 83: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 84: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 85: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 86: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 87: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 88: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 89: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 90: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
  },
  {
    "obstacleIcon": "🛑 Đèn đỏ Rẽ phải",
    "question": "Tình huống 91: Tại ngã tư có đèn đỏ, bạn có được tự ý rẽ phải nếu KHÔNG có biển báo hoặc đèn tín hiệu phụ cho phép không?",
    "options": [
      {
        "text": "Được phép rẽ nếu không có xe đi thẳng.",
        "correct": false
      },
      {
        "text": "Không được phép, phải dừng lại trước vạch dừng khi đèn đỏ trừ khi có biển/đèn phụ cho phép.",
        "correct": true
      },
      {
        "text": "Được phép rẽ nếu bóp còi báo hiệu.",
        "correct": false
      }
    ],
    "lawExplanation": "Đèn đỏ hiệu lệnh dừng lại. Chỉ được rẽ phải khi có biển phụ, đèn phụ hình mũi tên xanh hoặc hiệu lệnh của CSGT."
  },
  {
    "obstacleIcon": "🪪 Bằng lái 12 điểm",
    "question": "Tình huống 92: Theo quy định mới, mỗi Giấy phép lái xe (GPLX) có bao nhiêu điểm trong 1 năm?",
    "options": [
      {
        "text": "10 điểm",
        "correct": false
      },
      {
        "text": "12 điểm",
        "correct": true
      },
      {
        "text": "15 điểm",
        "correct": false
      }
    ],
    "lawExplanation": "Mỗi GPLX có 12 điểm. Nếu vi phạm sẽ bị trừ điểm tùy mức độ. Hết điểm sẽ bị tước GPLX và phải học/thi lại."
  },
  {
    "obstacleIcon": "⚡ Đường cao tốc",
    "question": "Tình huống 93: Khi nhập làn vào đường cao tốc, người lái xe phải thực hiện quy tắc nào?",
    "options": [
      {
        "text": "Có tín hiệu xin vào, nhường đường cho xe đang chạy trên đường, chỉ vào làn khi an toàn.",
        "correct": true
      },
      {
        "text": "Tăng tốc phóng thẳng ra làn giữa.",
        "correct": false
      },
      {
        "text": "Bóp còi liên tục để các xe khác tránh đường.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi nhập làn cao tốc phải bật xi-nhan, quan sát nhường đường cho xe trên đường chính rồi mới nhập làn."
  },
  {
    "obstacleIcon": "🛑 Dừng xe trên cao tốc",
    "question": "Tình huống 94: Bạn được phép dừng, đỗ xe ở đâu trên đường cao tốc?",
    "options": [
      {
        "text": "Ở bất kỳ làn đường nào nếu bật đèn khẩn cấp.",
        "correct": false
      },
      {
        "text": "Chỉ được dừng, đỗ xe ở nơi quy định hoặc làn dừng xe khẩn cấp khi xe gặp sự cố.",
        "correct": true
      },
      {
        "text": "Được dừng ở làn đường bên trái sát dải phân cách.",
        "correct": false
      }
    ],
    "lawExplanation": "Trừ trường hợp xe hư hỏng khẩn cấp, chỉ được dừng đỗ xe tại trạm dừng nghỉ hoặc điểm dừng đỗ quy định trên cao tốc."
  },
  {
    "obstacleIcon": "🛵 Đội mũ bảo hiểm",
    "question": "Tình huống 95: Người ngồi trên xe mô tô, xe gắn máy phải đội mũ bảo hiểm và cài dây mũ đúng quy cách khi nào?",
    "options": [
      {
        "text": "Chỉ khi đi trên đường quốc lộ.",
        "correct": false
      },
      {
        "text": "Chỉ khi gặp Cảnh sát giao thông.",
        "correct": false
      },
      {
        "text": "Khi tham gia giao thông trên tất cả các tuyến đường đường bộ.",
        "correct": true
      }
    ],
    "lawExplanation": "Bắt buộc đội mũ bảo hiểm đạt chuẩn và cài dây đúng quy cách trên mọi tuyến đường giao thông."
  },
  {
    "obstacleIcon": "🌙 Đèn chiếu sáng ban đêm",
    "question": "Tình huống 96: Khi đi trong đô thị và khu đông dân cư vào ban đêm (từ 18h đến 6h sáng hôm sau), bạn phải dùng loại đèn nào?",
    "options": [
      {
        "text": "Đèn chiếu xa (đèn pha).",
        "correct": false
      },
      {
        "text": "Đèn chiếu gần (đèn cốt).",
        "correct": true
      },
      {
        "text": "Đèn sương mù hoặc không cần bật đèn nếu đường sáng.",
        "correct": false
      }
    ],
    "lawExplanation": "Trong đô thị và khu đông dân cư ban đêm, nghiêm cấm bật đèn chiếu xa (pha), chỉ được dùng đèn chiếu gần (cốt)."
  },
  {
    "obstacleIcon": "📢 Sử dụng còi",
    "question": "Tình huống 97: Trong đô thị và khu đông dân cư, bạn bị CẤM sử dụng còi xe vào khoảng thời gian nào?",
    "options": [
      {
        "text": "Từ 22 giờ đêm đến 5 giờ sáng hôm sau.",
        "correct": true
      },
      {
        "text": "Từ 18 giờ tối đến 6 giờ sáng.",
        "correct": false
      },
      {
        "text": "Từ 12 giờ trưa đến 13 giờ chiều.",
        "correct": false
      }
    ],
    "lawExplanation": "Cấm bấm còi từ 22h đêm đến 5h sáng trong khu đông dân cư và đô thị để tránh ô nhiễm tiếng ồn."
  },
  {
    "obstacleIcon": "🚂 Đường cắt sắt",
    "question": "Tình huống 98: Khi phương tiện đường sắt đang tiến đến ngã tư giao cắt (chuông reo, rào chắn đang đóng), bạn phải dừng cách đường sắt tối thiểu bao nhiêu?",
    "options": [
      {
        "text": "Tối thiểu 3 mét.",
        "correct": false
      },
      {
        "text": "Tối thiểu 5 mét tính từ ray ngoài cùng.",
        "correct": true
      },
      {
        "text": "Tối thiểu 1 mét.",
        "correct": false
      }
    ],
    "lawExplanation": "Khi có tín hiệu xe lửa đến, phải dừng lại ngay và giữ khoảng cách tối thiểu 5m tính từ ray ngoài cùng."
  },
  {
    "obstacleIcon": "🚗 Trẻ em trên xe ô tô",
    "question": "Tình huống 99: Trẻ em dưới 10 tuổi và chiều cao dưới 1,35m khi ngồi trên ô tô du lịch phải được xếp ngồi thế nào?",
    "options": [
      {
        "text": "Được ngồi ở ghế hàng trước cạnh tài xế.",
        "correct": false
      },
      {
        "text": "Không được ngồi ở hàng ghế trước (cạnh tài xế) và phải sử dụng thiết bị an toàn cho trẻ em.",
        "correct": true
      },
      {
        "text": "Ngồi đâu cũng được miễn có thắt dây an toàn.",
        "correct": false
      }
    ],
    "lawExplanation": "Quy định mới nghiêm cấm trẻ em dưới 10 tuổi và dưới 1,35m ngồi ở hàng ghế trước, bắt buộc dùng ghế/thiết bị an toàn trẻ em."
  },
  {
    "obstacleIcon": "🚸 Trường học",
    "question": "Tình huống 100: Khi lái xe qua khu vực có biển báo 'Khu vực có trẻ em/Trường học', bạn xử lý ra sao?",
    "options": [
      {
        "text": "Giảm tốc độ, chú ý quan sát và sẵn sàng phanh dừng lại.",
        "correct": true
      },
      {
        "text": "Bóp còi thật to để học sinh không chạy ra đường.",
        "correct": false
      },
      {
        "text": "Giữ nguyên tốc độ vì đang trong giờ học.",
        "correct": false
      }
    ],
    "lawExplanation": "Qua khu vực trường học phải chủ động giảm tốc độ, chú ý quan sát cẩn thận vì trẻ em dễ bất ngờ chạy ra đường."
    }
];