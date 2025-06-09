from flask import jsonify

def predict(available, occupied, total_spots, confidence, frames_processed, total_frames, fps):
    return jsonify({
        'available': available,
        'occupied': occupied,
        'total_spots': total_spots,
        'confidence': round(confidence * 100, 2),
        'frames_processed': frames_processed,
        'total_frames': total_frames,
        'video_fps': fps
    }) 