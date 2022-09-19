package com.enimal.backend.service;

import com.enimal.backend.dto.Comment.CommentRegistDto;

public interface CommentService {
    void registComment(CommentRegistDto commentRegistDto);
}
