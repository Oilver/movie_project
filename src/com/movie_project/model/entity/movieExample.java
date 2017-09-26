package com.movie_project.model.entity;

import com.movie_project.util.PaginationUtil;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class movieExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    protected PaginationUtil pagination;

    public movieExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    public void setPagination(PaginationUtil pagination) {
        this.pagination=pagination;
    }

    public PaginationUtil getPagination() {
        return pagination;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andIdIsNull() {
            addCriterion("id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andMovNameIsNull() {
            addCriterion("mov_name is null");
            return (Criteria) this;
        }

        public Criteria andMovNameIsNotNull() {
            addCriterion("mov_name is not null");
            return (Criteria) this;
        }

        public Criteria andMovNameEqualTo(String value) {
            addCriterion("mov_name =", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameNotEqualTo(String value) {
            addCriterion("mov_name <>", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameGreaterThan(String value) {
            addCriterion("mov_name >", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameGreaterThanOrEqualTo(String value) {
            addCriterion("mov_name >=", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameLessThan(String value) {
            addCriterion("mov_name <", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameLessThanOrEqualTo(String value) {
            addCriterion("mov_name <=", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameLike(String value) {
            addCriterion("mov_name like", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameNotLike(String value) {
            addCriterion("mov_name not like", value, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameIn(List<String> values) {
            addCriterion("mov_name in", values, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameNotIn(List<String> values) {
            addCriterion("mov_name not in", values, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameBetween(String value1, String value2) {
            addCriterion("mov_name between", value1, value2, "movName");
            return (Criteria) this;
        }

        public Criteria andMovNameNotBetween(String value1, String value2) {
            addCriterion("mov_name not between", value1, value2, "movName");
            return (Criteria) this;
        }

        public Criteria andTotalScoreIsNull() {
            addCriterion("total_score is null");
            return (Criteria) this;
        }

        public Criteria andTotalScoreIsNotNull() {
            addCriterion("total_score is not null");
            return (Criteria) this;
        }

        public Criteria andTotalScoreEqualTo(Double value) {
            addCriterion("total_score =", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreNotEqualTo(Double value) {
            addCriterion("total_score <>", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreGreaterThan(Double value) {
            addCriterion("total_score >", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreGreaterThanOrEqualTo(Double value) {
            addCriterion("total_score >=", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreLessThan(Double value) {
            addCriterion("total_score <", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreLessThanOrEqualTo(Double value) {
            addCriterion("total_score <=", value, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreIn(List<Double> values) {
            addCriterion("total_score in", values, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreNotIn(List<Double> values) {
            addCriterion("total_score not in", values, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreBetween(Double value1, Double value2) {
            addCriterion("total_score between", value1, value2, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTotalScoreNotBetween(Double value1, Double value2) {
            addCriterion("total_score not between", value1, value2, "totalScore");
            return (Criteria) this;
        }

        public Criteria andTypeIsNull() {
            addCriterion("type is null");
            return (Criteria) this;
        }

        public Criteria andTypeIsNotNull() {
            addCriterion("type is not null");
            return (Criteria) this;
        }

        public Criteria andTypeEqualTo(String value) {
            addCriterion("type =", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotEqualTo(String value) {
            addCriterion("type <>", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThan(String value) {
            addCriterion("type >", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeGreaterThanOrEqualTo(String value) {
            addCriterion("type >=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThan(String value) {
            addCriterion("type <", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLessThanOrEqualTo(String value) {
            addCriterion("type <=", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeLike(String value) {
            addCriterion("type like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotLike(String value) {
            addCriterion("type not like", value, "type");
            return (Criteria) this;
        }

        public Criteria andTypeIn(List<String> values) {
            addCriterion("type in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotIn(List<String> values) {
            addCriterion("type not in", values, "type");
            return (Criteria) this;
        }

        public Criteria andTypeBetween(String value1, String value2) {
            addCriterion("type between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andTypeNotBetween(String value1, String value2) {
            addCriterion("type not between", value1, value2, "type");
            return (Criteria) this;
        }

        public Criteria andShowtimeIsNull() {
            addCriterion("showtime is null");
            return (Criteria) this;
        }

        public Criteria andShowtimeIsNotNull() {
            addCriterion("showtime is not null");
            return (Criteria) this;
        }

        public Criteria andShowtimeEqualTo(Date value) {
            addCriterionForJDBCDate("showtime =", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeNotEqualTo(Date value) {
            addCriterionForJDBCDate("showtime <>", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeGreaterThan(Date value) {
            addCriterionForJDBCDate("showtime >", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("showtime >=", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeLessThan(Date value) {
            addCriterionForJDBCDate("showtime <", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("showtime <=", value, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeIn(List<Date> values) {
            addCriterionForJDBCDate("showtime in", values, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeNotIn(List<Date> values) {
            addCriterionForJDBCDate("showtime not in", values, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("showtime between", value1, value2, "showtime");
            return (Criteria) this;
        }

        public Criteria andShowtimeNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("showtime not between", value1, value2, "showtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeIsNull() {
            addCriterion("runningtime is null");
            return (Criteria) this;
        }

        public Criteria andRunningtimeIsNotNull() {
            addCriterion("runningtime is not null");
            return (Criteria) this;
        }

        public Criteria andRunningtimeEqualTo(Integer value) {
            addCriterion("runningtime =", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeNotEqualTo(Integer value) {
            addCriterion("runningtime <>", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeGreaterThan(Integer value) {
            addCriterion("runningtime >", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeGreaterThanOrEqualTo(Integer value) {
            addCriterion("runningtime >=", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeLessThan(Integer value) {
            addCriterion("runningtime <", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeLessThanOrEqualTo(Integer value) {
            addCriterion("runningtime <=", value, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeIn(List<Integer> values) {
            addCriterion("runningtime in", values, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeNotIn(List<Integer> values) {
            addCriterion("runningtime not in", values, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeBetween(Integer value1, Integer value2) {
            addCriterion("runningtime between", value1, value2, "runningtime");
            return (Criteria) this;
        }

        public Criteria andRunningtimeNotBetween(Integer value1, Integer value2) {
            addCriterion("runningtime not between", value1, value2, "runningtime");
            return (Criteria) this;
        }

        public Criteria andDirectorIsNull() {
            addCriterion("director is null");
            return (Criteria) this;
        }

        public Criteria andDirectorIsNotNull() {
            addCriterion("director is not null");
            return (Criteria) this;
        }

        public Criteria andDirectorEqualTo(String value) {
            addCriterion("director =", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorNotEqualTo(String value) {
            addCriterion("director <>", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorGreaterThan(String value) {
            addCriterion("director >", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorGreaterThanOrEqualTo(String value) {
            addCriterion("director >=", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorLessThan(String value) {
            addCriterion("director <", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorLessThanOrEqualTo(String value) {
            addCriterion("director <=", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorLike(String value) {
            addCriterion("director like", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorNotLike(String value) {
            addCriterion("director not like", value, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorIn(List<String> values) {
            addCriterion("director in", values, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorNotIn(List<String> values) {
            addCriterion("director not in", values, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorBetween(String value1, String value2) {
            addCriterion("director between", value1, value2, "director");
            return (Criteria) this;
        }

        public Criteria andDirectorNotBetween(String value1, String value2) {
            addCriterion("director not between", value1, value2, "director");
            return (Criteria) this;
        }

        public Criteria andActorIsNull() {
            addCriterion("actor is null");
            return (Criteria) this;
        }

        public Criteria andActorIsNotNull() {
            addCriterion("actor is not null");
            return (Criteria) this;
        }

        public Criteria andActorEqualTo(String value) {
            addCriterion("actor =", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorNotEqualTo(String value) {
            addCriterion("actor <>", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorGreaterThan(String value) {
            addCriterion("actor >", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorGreaterThanOrEqualTo(String value) {
            addCriterion("actor >=", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorLessThan(String value) {
            addCriterion("actor <", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorLessThanOrEqualTo(String value) {
            addCriterion("actor <=", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorLike(String value) {
            addCriterion("actor like", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorNotLike(String value) {
            addCriterion("actor not like", value, "actor");
            return (Criteria) this;
        }

        public Criteria andActorIn(List<String> values) {
            addCriterion("actor in", values, "actor");
            return (Criteria) this;
        }

        public Criteria andActorNotIn(List<String> values) {
            addCriterion("actor not in", values, "actor");
            return (Criteria) this;
        }

        public Criteria andActorBetween(String value1, String value2) {
            addCriterion("actor between", value1, value2, "actor");
            return (Criteria) this;
        }

        public Criteria andActorNotBetween(String value1, String value2) {
            addCriterion("actor not between", value1, value2, "actor");
            return (Criteria) this;
        }

        public Criteria andIntroductionIsNull() {
            addCriterion("introduction is null");
            return (Criteria) this;
        }

        public Criteria andIntroductionIsNotNull() {
            addCriterion("introduction is not null");
            return (Criteria) this;
        }

        public Criteria andIntroductionEqualTo(String value) {
            addCriterion("introduction =", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionNotEqualTo(String value) {
            addCriterion("introduction <>", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionGreaterThan(String value) {
            addCriterion("introduction >", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionGreaterThanOrEqualTo(String value) {
            addCriterion("introduction >=", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionLessThan(String value) {
            addCriterion("introduction <", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionLessThanOrEqualTo(String value) {
            addCriterion("introduction <=", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionLike(String value) {
            addCriterion("introduction like", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionNotLike(String value) {
            addCriterion("introduction not like", value, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionIn(List<String> values) {
            addCriterion("introduction in", values, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionNotIn(List<String> values) {
            addCriterion("introduction not in", values, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionBetween(String value1, String value2) {
            addCriterion("introduction between", value1, value2, "introduction");
            return (Criteria) this;
        }

        public Criteria andIntroductionNotBetween(String value1, String value2) {
            addCriterion("introduction not between", value1, value2, "introduction");
            return (Criteria) this;
        }

        public Criteria andStatusIsNull() {
            addCriterion("status is null");
            return (Criteria) this;
        }

        public Criteria andStatusIsNotNull() {
            addCriterion("status is not null");
            return (Criteria) this;
        }

        public Criteria andStatusEqualTo(Integer value) {
            addCriterion("status =", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotEqualTo(Integer value) {
            addCriterion("status <>", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThan(Integer value) {
            addCriterion("status >", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusGreaterThanOrEqualTo(Integer value) {
            addCriterion("status >=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThan(Integer value) {
            addCriterion("status <", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusLessThanOrEqualTo(Integer value) {
            addCriterion("status <=", value, "status");
            return (Criteria) this;
        }

        public Criteria andStatusIn(List<Integer> values) {
            addCriterion("status in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotIn(List<Integer> values) {
            addCriterion("status not in", values, "status");
            return (Criteria) this;
        }

        public Criteria andStatusBetween(Integer value1, Integer value2) {
            addCriterion("status between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andStatusNotBetween(Integer value1, Integer value2) {
            addCriterion("status not between", value1, value2, "status");
            return (Criteria) this;
        }

        public Criteria andImageIsNull() {
            addCriterion("image is null");
            return (Criteria) this;
        }

        public Criteria andImageIsNotNull() {
            addCriterion("image is not null");
            return (Criteria) this;
        }

        public Criteria andImageEqualTo(String value) {
            addCriterion("image =", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotEqualTo(String value) {
            addCriterion("image <>", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageGreaterThan(String value) {
            addCriterion("image >", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageGreaterThanOrEqualTo(String value) {
            addCriterion("image >=", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLessThan(String value) {
            addCriterion("image <", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLessThanOrEqualTo(String value) {
            addCriterion("image <=", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageLike(String value) {
            addCriterion("image like", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotLike(String value) {
            addCriterion("image not like", value, "image");
            return (Criteria) this;
        }

        public Criteria andImageIn(List<String> values) {
            addCriterion("image in", values, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotIn(List<String> values) {
            addCriterion("image not in", values, "image");
            return (Criteria) this;
        }

        public Criteria andImageBetween(String value1, String value2) {
            addCriterion("image between", value1, value2, "image");
            return (Criteria) this;
        }

        public Criteria andImageNotBetween(String value1, String value2) {
            addCriterion("image not between", value1, value2, "image");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}